import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import './App.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='navbar'>
        <nav>
            <h3>Wcodes</h3>
            <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
            <div className='burger' onClick={toggleMenu}>
                <button><FontAwesomeIcon icon={Icons.faBars} /></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar