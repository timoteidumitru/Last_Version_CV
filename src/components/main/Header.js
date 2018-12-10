import React, { Component } from 'react'
import TopMenu from './TopMenu'
import LeftName from './LeftName'
import HeaderText from './HeaderText'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        toggle: false,
    }
  }
  toggleClass = () => {
    const currentState = this.state.toggle;
    this.setState({ toggle: !currentState })
    let classToggle = document.getElementById("toggle-menu-button");
    classToggle.classList.toggle("show")
  }
  render() {
    return (
      <div>
        <TopMenu toggleClass={this.toggleClass} />
        <LeftName />
        <HeaderText />
      </div>
    )
  }
}

export default Index
