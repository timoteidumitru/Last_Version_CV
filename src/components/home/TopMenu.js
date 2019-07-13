import React from 'react'
import { Link } from "react-router-dom"
import './header.scss'

function TopMenu(props) {
  return (
    <div>
      <div className="right-menu">
          <div className="group-1">
            <div className="rectangle">
              <div className="start-project"><Link to={'/menu'}>start project</Link></div>
            </div>
          </div>
          <div className="group"  >
            <div className="path-1">
              <Link to={'/menu'}></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopMenu
