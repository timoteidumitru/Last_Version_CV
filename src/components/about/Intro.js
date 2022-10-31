import React from "react";
import "./about.scss";
import TopNav from "./TopNav";

const Intro = () => {
  return (
    <div className="intro-main">
      <div className="about-intro">
        <TopNav />
        <div className="about-page">
          <span className="about-main-name">About</span>
        </div>
        <div className="left-name">
          <p className="left-name-text">Timotei Dumitru</p>
        </div>
        <div className="header-text-about">
          I'am a Frontend Developer with experience in JavaScript (ES6+), React,
          Vue and Angular. Have experience working in a team environment using
          Git and Agile methodologies. Looking for organizations where I can use
          my skills to contribute as a Frontend Developer.
        </div>
      </div>
      <div className="office-image"></div>
    </div>
  );
};

export default Intro;
