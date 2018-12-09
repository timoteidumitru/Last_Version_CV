import React, { Component } from 'react'
import './menu.scss'
import MenuList from './MenuList'

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu-wrapper show">
          <MenuList />
        </div>
      </div>
    )
  }
}

export default  Menu
