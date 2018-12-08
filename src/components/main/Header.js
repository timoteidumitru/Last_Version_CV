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
  }
  render() {
    return (
      <div>
        <TopMenu toggleClass={this.toggleClass}
                 classes={ this.state.toggle ? "path-2" : "path-1" } />
        <LeftName />
        <HeaderText />
      </div>
    )
  }
}

export default Index
