import React from 'react'
import './nav.css'
// import {Home, AiOutlineUser} from '@mui/icons-material/Home';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <div class="navhead"><p>Welcome Admin</p></div>
      <div class="navbar">
      <a href="/" onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}><HomeIcon/></a>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><PersonIcon/></a>
    </div>
    </nav>
  )
}

export default Nav
