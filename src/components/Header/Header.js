import React, { useState } from 'react'
import './Header.css'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    const [query,setQuery]=useState('')
    const handleQuery=(e)=>{
        setQuery(e.target.value)
    }
  return (
    <div className='Header'>
        <Avatar src={''} alt={'user profile picture'} className='user-img'/>
        <div className='search-nav'>
            <AccessTimeIcon style={{color:'white',marginRight:'50px'}}/>
            <div className='search-input'>
            <SearchIcon className='search-icon'/>
            <input type="text" placeholder={`Search`} value={query} onChange={handleQuery}/>
            </div>
        </div>
        <HelpOutlineIcon style={{color:'white'}}/>
    </div>
  )
}

export default Header