import React,{useState,useEffect, useRef} from 'react'
import Posts from './Posts'
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';
import { auth, db } from '../../firebase';
import { addDoc,onSnapshot,serverTimestamp,collection,orderBy,query} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectChannel } from '../../features/appSlice';

function Feed() {
  //Get channel name
  const channelName=useSelector(selectChannel)

  //call firebase collection
  const collectionRef=collection(db,'Slack',`${channelName}`,'messages')
  const currentUser=auth.currentUser

  const [message,setMessage]=useState('')
  const [posts,setPosts]=useState([])
  const messagesEndRef=useRef(null)
  
  useEffect(()=>{
    onSnapshot(query(collectionRef,orderBy('createAt','desc')),(snapshot)=>{
      setPosts(snapshot.docs.map((doc)=>(
        {
          data:doc.data(),
          id:doc.id
        }
      )))
    })
  // eslint-disable-next-line
  },[posts])

  useEffect(()=>{
    scrollToBottom()
  },[message])

  const handleMessage=(e)=>{
    e.preventDefault()
    if(message.length>0 && channelName!==undefined){
      addDoc(collection(db,'Slack',channelName,'messages'),{
        userName:currentUser.displayName,
        displayName:getFirstName(),
        userEmail:currentUser.email,
        userProfile:currentUser.photoURL,
        userMessage:message,
        channelPosted: channelName,
        uid: currentUser.uid,
        createAt:serverTimestamp()
      })
      setMessage('')
    }
  }
  const scrollToBottom =()=>{
    messagesEndRef.current?.scrollIntoView({behvaior:'smooth'})
  }
  const getFirstName=()=>{
    const fullName=currentUser.displayName.split(' ')
    const firstName=fullName[0]
    return firstName
  }

  return (
    <div className='Feed'>
      <div className='posts'>
      <div ref={messagesEndRef}></div>
        {
          posts.map(({id,data:{displayName,userProfile,userMessage,uid}})=>{
            return <Posts
            key={id}
            messageID={uid}
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
          <input type="text" placeholder={` #${channelName}`} value={message} 
          onChange={(e)=>{
            if(e.target.value.length>=0){
              setMessage(e.target.value)
            }
          }}/>
          <button type="submit" style={{display:"none"}}></button>
          <SendIcon className='send-icon' onClick={handleMessage}/>
        </form>
      </div>
    </div>
  )
}

export default Feed