import React, { Component } from 'react'
import TopNav from '../about/NavAbout'
import './resume.scss'

export default class Index extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <h1>Hello from Resume Section</h1>
      </div>
    )
  }
}
