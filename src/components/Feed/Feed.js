import React,{useState,useEffect} from 'react'
import Posts from './Posts'
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';

function Feed() {
  const [message,setMessage]=useState('')
  const handleMessage=(e)=>{
    e.preventDefault()
    alert(message)
  }
  return (
    <div className='Feed'>
      <div className='posts'>
        <Posts userName={'Nishkarsh'} userMessage={'Hello World'} />
        <Posts userName={'B'} userMessage={'B'} />
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