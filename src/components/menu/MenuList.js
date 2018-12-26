import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './menu.scss'
import SocialIcons from './SocialIcons'

class MenuList extends Component {

  mouseEnter = () => {
    const icons = document.querySelector(".social-icons")
    icons.classList.add("fade-element")
  }
  mouseLeave = () => {
    const icons = document.querySelector(".social-icons")
    icons.classList.remove("fade-element")
  }

  render() {
    return (
      <div>
        <ul className="menu-list">
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><Link className="menu-item-link" to="/work">Work</Link></li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><Link className="menu-item-link" to="/about">About</Link></li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><Link className="menu-item-link" to="/resume">Resume</Link></li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><Link className="menu-item-link" to="/contact">Contact</Link></li>
          <SocialIcons />
        </ul>
      </div>
    )
  }
}

export default MenuList
