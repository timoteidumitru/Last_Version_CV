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
          I’m a FrontEnd Developer specialized in JavaScript stack, being an
          advocate of continuous self improvement I’m looking for a company that
          uses Agile methodologies where I can perform my skills as a FrontEnd
          Developer.
        </div>
      </div>
      <div className="office-image"></div>
    </div>
  );
};

export default Intro;
