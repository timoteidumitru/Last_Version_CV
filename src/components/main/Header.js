import React, { Component } from 'react'
import './header.scss'
import TopMenu from './TopMenu';
import LeftName from './LeftName';
import HeaderText from './HeaderText';

class Index extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <LeftName />
        <HeaderText />
      </div>
    )
  }
}

export default Index
