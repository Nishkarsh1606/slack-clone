import React from 'react'
import './Posts.css'
import { auth } from '../../firebase'
import { Avatar } from '@mui/material'

function Posts({userName,userMessage,userProfile}) {
    const currentUser=auth.currentUser
    return (
        <div className='Posts'>
            <Avatar src={`${userProfile}`} className='user-img' />
            <div className='user'>
                <p className='user-info'>{userName}</p>
                <p className='user-info'>{userMessage}</p>
            </div>
        </div>
    )
}

export default Posts