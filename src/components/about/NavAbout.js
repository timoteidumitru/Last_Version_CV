import React, { Component } from 'react'
import './about.scss'


import { Route } from 'react-router-dom'

export default class NavAbout extends Component {
  constructor(props) {
    super(props)
    this.state = {
        toggle: false,
    }
  }
  toggleClass = () => {
    const currentState = this.state.toggle
    this.setState({ toggle: !currentState })
    let classToggle = document.getElementById("toggle-menu-button")
    classToggle.classList.toggle("show")
  }
  render() {
    return(
      <Route render={({ history }) => (
        <div className="nav-activator-about" >
          <button
            type='button'
            onClick={() => { history.push('/') }}
            onKeyUp={this.toggleClass}
            className="go-menu"
          >
          </button>
        </div>
      )} />
    )
  }
}