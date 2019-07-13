import React from 'react'
import './about.scss'
import TopNav from './TopNav'


const Intro = () => {
  return (
    <div className="intro-main">
      <div className="about-intro">
        <TopNav />
        <div className="about-page">
          <span className="about-main-name">
            About
          </span>
        </div>
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

export default Intro