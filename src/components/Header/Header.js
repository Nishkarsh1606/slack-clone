import React, { useState } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase'
import './Header.css'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
    const currentUser=auth.currentUser
    const [query,setQuery]=useState('')
    const handleQuery=(e)=>{
        setQuery(e.target.value)
    }
    const handleSignOut=()=>{
      setTimeout(()=>{
        signOut(auth)
      },500)
    }
  return (
    <div className='Header'>
        <Avatar src={`${currentUser.photoURL}`} alt={'user profile picture'}/>
        <div className='search-nav'>
            <AccessTimeIcon style={{color:'white',marginRight:'50px'}}/>
            <div className='search-input'>
            <SearchIcon className='search-icon'/>
            <input type="text" placeholder={`Search`} value={query} onChange={handleQuery}/>
            </div>
        </div>
        <div>
        <LogoutIcon onClick={handleSignOut} className='logout-icon'/>
        </div>
    </div>
  )
}

export default Header