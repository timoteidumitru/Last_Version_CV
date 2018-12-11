import React from 'react'
import './menu.scss'

function TopMenu(props) {
  const { toggleMenu } = props
  return (
    <div>
      <div className="right-nav">
          <div className="nav-button">
            <div className="button-wrapper">
              <div onClick={toggleMenu} className="button-text">main page</div>
            </div>
          </div>
          <div className="nav-activator">
            <div className="path-2" onClick={toggleMenu}
            ></div>
          </div>
        </div>
    </div>
  )
}

export default TopMenu
