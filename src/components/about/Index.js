import React, { Component } from 'react'
import './about.scss'
import Intro from './Intro';
import Content from './Content';
import Footer from './Footer';

export default class Index extends Component {

  render() {
    return (
      <div className="about-main">
        <Intro />
        <Content />
        <Footer />
      </div>
    )
  }
}
