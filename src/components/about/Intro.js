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
          If you think you’re too small to make a difference, <br />
          try sleeping with a mosquito. (I hope you've smiled). <br />
        </div>
      </div>
      <div className="office-image"></div>
    </div>
  )
}

export default Intro