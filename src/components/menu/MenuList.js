import React, { Component } from 'react'
import './menu.scss'
import SocialIcons from './SocialIcons';

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
              onMouseLeave={this.mouseLeave} className="menu-item">Work</li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item">About</li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item">Resume</li>
          <li onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave} className="menu-item">Contact</li>
          <SocialIcons />
        </ul>
      </div>
    )
  }
}

export default MenuList
