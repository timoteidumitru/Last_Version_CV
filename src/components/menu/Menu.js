import React, { Component } from 'react'
import './menu.scss'
import MenuList from './MenuList'
import LeftName from './LeftName'
import TopNav from './TopNav'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
        toggle: false,
    }
  }

  toggleMenu = () => {
    const currentState = this.state.toggle;
    this.setState({ toggle: !currentState })
    let classToggle = document.getElementById("toggle-menu-button");
    classToggle.classList.toggle("show")
  }

    render() {
      return (
      <div>
        <div id="toggle-menu-button" className="menu-wrapper">
          <MenuList />
          <LeftName />
          <TopNav toggleMenu={this.toggleMenu} />
        </div>
      </div>
    )
  }
}

export default  Menu
