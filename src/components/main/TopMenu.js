import React from 'react'
import './header.scss'

function TopMenu(props) {
  const { toggleClass } = props
  return (
    <div>
      <div className="right-menu">
          <div className="group-1">
            <div className="rectangle">
              <div className="start-project">start project</div>
            </div>
          </div>
          <div className="group"  >
            <div className="path-1"
                 onClick={toggleClass}
            ></div>
          </div>
        </div>
    </div>
  )
}

export default TopMenu
