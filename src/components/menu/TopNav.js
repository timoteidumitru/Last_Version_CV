import React from 'react'
import './menu.scss'

function TopMenu(props) {
  const { toggleMenu } = props
  return (
    <div>
      <div className="right-nav">
          <div className="nav-button">
            <div className="button-wrapper">
              <div className="button-text">start project</div>
            </div>
          </div>
          <div className="nav-activator"  >
            <div onClick={toggleMenu}
            >&#120;</div>
          </div>
        </div>
    </div>
  )
}

export default TopMenu
