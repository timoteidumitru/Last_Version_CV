import React, { Component } from 'react'
import './index.scss'
import TopMenu from './TopMenu';
import LeftName from './LeftName';

class Index extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <LeftName />
      </div>
    )
  }
}

export default Index
