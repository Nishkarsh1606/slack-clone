import React from 'react'
import './Posts.css'
import { Avatar } from '@mui/material'

function Posts({userName,userMessage}) {
    return (
        <div className='Posts'>
            <Avatar alt={'User display picture'} className='user-img' />
            <div className='user'>
                <p className='user-info'>{userName}</p>
                <p className='user-info'>{userMessage}</p>
            </div>
        </div>
    )
}

export default Posts