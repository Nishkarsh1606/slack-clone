import React,{useState,useEffect} from 'react'
import { auth } from '../../firebase';
import Posts from './Posts'
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';

function Feed() {
  const currentUser=auth.currentUser
  const [message,setMessage]=useState('')
  const handleMessage=(e)=>{
    e.preventDefault()
    alert(message)
  }
  const getFirstName=()=>{
    const fullName=currentUser.displayName.split(' ')
    const firstName=fullName[0]
    return firstName
  }
  return (
    <div className='Feed'>
      <div className='posts'>
        <Posts userName={getFirstName()} userMessage={'second'} />
        <Posts userName={getFirstName()} userMessage={'first'} />
      </div>
      <div className='post-message'>
        <form onSubmit={handleMessage} className={'post-message-form'}>
          <input type="text" placeholder='Send Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <button type="submit" style={{display:"none"}}></button>
          <SendIcon className='send-icon'/>
        </form>
      </div>
    </div>
  )
}

export default Feed