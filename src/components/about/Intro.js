import React, { Component } from 'react'
import './about.scss'
import NavAbout from './NavAbout'


class Intro extends Component {

  render() {
    return (
      <div className="intro-main">
        <div className="about-intro">
          <NavAbout />
          <div className="left-name">
            <p className="left-name-text">Timotei Dumitru</p>
          </div>
          <div className="header-text-about">
            The pleasure <br />
            I gain from climbing  <br />
            something that  <br />
            seems unclimbable! <br />
          </div>
        </div>
        <div className="office-image"></div>
      </div>
    )
  }
}

export default Intro