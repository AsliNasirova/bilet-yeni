import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
        <ul className='switchNav'>
            <li><NavLink to={"home"}>Home</NavLink></li>
            <li><NavLink to={"add"}>Add</NavLink></li>
        </ul>
      
    </div>
    </nav>
  )
}

export default Navbar
