import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import SocialIcons from './SocialIcons'
import './menu.scss'

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
              onMouseLeave={this.mouseLeave} className="menu-item"><NavLink className="menu-item-link" to="/about">About</NavLink></li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><NavLink className="menu-item-link" to="/work">Work</NavLink></li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><NavLink className="menu-item-link" to="/resume">Resume</NavLink></li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item"><NavLink className="menu-item-link" to="/contact">Contact</NavLink></li>
          <SocialIcons />
        </ul>
      </div>
    )
  }
}

export default MenuList
