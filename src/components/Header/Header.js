import React, { useState } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase'
import './Header.css'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { purple } from '@mui/material/colors'

function Header() {
    const currentUser=auth.currentUser
    const [query,setQuery]=useState('')
    
    const handleQuery=(e)=>{
        setQuery(e.target.value)
        return query
    }
    const handleSignOut=()=>{
      setTimeout(()=>{
        signOut(auth)
      },500)
    }

  return (
    <div className='Header'>
      {
        (currentUser.photoURL)?(<Avatar src={`${currentUser.photoURL}`} sx={{ bgcolor: purple[900] }}/>):
        (<Avatar src={`${currentUser.displayName[0]}`} sx={{ bgcolor: purple[900] }}/>)
      }
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