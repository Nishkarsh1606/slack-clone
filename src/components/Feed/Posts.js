import React from 'react'
import { db } from '../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { auth } from '../../firebase'
import './Posts.css'
// import { auth } from '../../firebase'
import { Avatar } from '@mui/material'
import { purple } from '@mui/material/colors'
// eslint-disable-next-line
import { DeleteForever } from '@mui/icons-material'

function Posts({userName,userMessage,userProfile,messageID,userID}) {
    //Select collection name

    const currentUser=auth.currentUser
    // eslint-disable-next-line
    const handleDelete=()=>{
        if(currentUser.uid===userID){
            // alert('Deleted!')
            deleteDoc(doc(db,'Slack',messageID))
        }
    }
    return (
        <div className='Posts'>
            <div className='main-container'>
                <Avatar src={`${userProfile}`} sx={{ bgcolor: purple[900] }} className='user-img' alt={userName[0]}/>
                <div className='user'>
                    <p className='user-info'>{userName}</p>
                    <p className='user-info user-message'>{userMessage}</p>
                </div>
            </div>
            {/* <div onClick={handleDelete}>
                <DeleteForever className={`delete-icon`}/>
            </div> */}
        </div>
    )
}

export default Posts