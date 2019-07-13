import React from 'react'
import { Link } from "react-router-dom"
import './menu.scss'

const TopMenu = () => {
  return (
    <div>
      <div className="right-nav">
          <div className="nav-button">
            <div className="button-wrapper">
            <Link to={'/'}>
              <div className="button-text-menu">main page</div>
            </Link>
            </div>
          </div>
          <div className="nav-activator">
            <Link to={'/'}>
              <div className="path-2"></div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default TopMenu
