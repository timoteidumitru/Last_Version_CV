import React, { Component } from 'react'
import './about.scss'


import { Route } from 'react-router-dom'

export default class NavAbout extends Component {
  constructor(props) {
    super(props)
    this.state = {
        toggle: false,
        showMenu: true
    }
  }
  toggleMenu = () => {
    const currentState = this.state.toggle
    this.props.history.push('/');
    this.setState({ toggle: !currentState })
    var mainPage = document.getElementById("toggle-menu-button")
    if(this.state.showMenu) {
      setTimeout(() => {
        mainPage.classList.toggle("show")
      }, 500)
    }
  }
  render() {
    return(
      <Route render={({ history }) => (
        <div className="nav-activator-about" >
          <button
            type='button'
            onClick={this.toggleMenu}
            className="go-menu"
          >
          </button>
        </div>
      )} />
    )
  }
}