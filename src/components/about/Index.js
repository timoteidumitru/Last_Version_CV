import React, { Component } from 'react'
import './about.scss'
import Intro from './Intro';
import Squares from './Squares';
import Skills from './Skills';
import Footer from './Footer';

export default class Index extends Component {

  render() {
    return (
      <div className="about-main">
        <Intro />
        <Squares />
        <Skills />
        <Footer />
      </div>
    )
  }
}
