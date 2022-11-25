import React,{useState,useEffect} from 'react'
import { auth } from '../../firebase';
import Posts from './Posts'
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';
import { addDoc,onSnapshot,serverTimestamp } from 'firebase/firestore';
import {collectionRef,collectionOrderedByTime } from '../../firebase';

function Feed() {
  useEffect(()=>{
    onSnapshot(collectionOrderedByTime,(snapshot)=>{
      setPosts(snapshot.docs.map((doc)=>(
        {
          data:doc.data(),
          id:doc.id
        }
      )))
    })
  },[])
  const currentUser=auth.currentUser
  const [message,setMessage]=useState('')
  const [posts,setPosts]=useState([])

  const getFirstName=()=>{
    const fullName=currentUser.displayName.split(' ')
    const firstName=fullName[0]
    return firstName
  }
  const handleMessage=(e)=>{
    e.preventDefault()
    setMessage('')
    addDoc(collectionRef,{
      userName:currentUser.displayName,
      displayName:getFirstName(),
      userEmail:currentUser.email,
      userProfile:currentUser.photoURL,
      userMessage:message,
      uid: currentUser.uid,
      createAt:serverTimestamp()
    })
  }
  return (
    <div className='Feed'>
      <div className='posts'>
        {
          posts.map(({id,data:{displayName,userProfile,userMessage,uid}})=>{
            return <Posts
            key={id}
            messageID={id}
            userID={uid}
            userName={displayName}
            userMessage={userMessage}
            userProfile={userProfile}
            />
          })
        }
      </div>
      <div className='post-message'>
        <form onSubmit={handleMessage} className={'post-message-form'}>
          <input type="text" placeholder='Send Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <button type="submit" style={{display:"none"}}></button>
          <SendIcon className='send-icon' onClick={handleMessage}/>
        </form>
      </div>
    </div>
  )
}

export default Feed