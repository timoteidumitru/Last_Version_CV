import React from 'react'
import './menu.scss'
import SocialIcons from './SocialIcons';

function MenuList() {
  return (
    <div>
      <ul className="menu-list">
        <li className="menu-item">Work</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Resume</li>
        <li className="menu-item">Contact</li>
        <SocialIcons />
      </ul>
    </div>
  )
}

export default MenuList
