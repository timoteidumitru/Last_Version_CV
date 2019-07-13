import React from 'react'
import './menu.scss'
import MenuList from './MenuList'
import LeftName from './LeftName'
import TopNav from './TopNav'

const Menu = () => {
      return (
      <div>
        <div id="toggle-menu-button" className="menu-wrapper show">
          <MenuList />
          <LeftName />
          <TopNav />
        </div>
      </div>
    )
}

export default  Menu
