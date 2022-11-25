import React from 'react'
import './Posts.css'
// import { auth } from '../../firebase'
import { Avatar } from '@mui/material'
import { purple } from '@mui/material/colors'
import { DeleteForever } from '@mui/icons-material'

function Posts({userName,userMessage,userProfile,messageID}) {
    return (
        <div className='Posts' id={messageID}>
            <div className='main-container'>
                <Avatar src={`${userProfile}`} sx={{ bgcolor: purple[900] }} className='user-img' alt={userName[0]}/>
                <div className='user'>
                    <p className='user-info'>{userName}</p>
                    <p className='user-info'>{userMessage}</p>
                </div>
            </div>
            <div>
                <DeleteForever className='delete-icon'/>
            </div>
        </div>
    )
}

export default Posts