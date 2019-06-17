import React, { Component } from 'react'
import TopNav from '../about/NavAbout'
import Content from './Content'
import './resume.scss'

export default class Index extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Content />
      </div>
    )
  }
}
