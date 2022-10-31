import React from "react";
import "./about.scss";

export default function Square() {
  return (
    <div className="about-items-wrapper">
      <div className="item-about">
        <span className="clock">
          <div className="item-about-image-holder">
            <i className="icons-font fas fa-tachometer-alt"></i>
          </div>
        </span>
        <span className="item-abut-title">Fast</span>
        <span className="item-about-message">
          Fast loading time and lag free interaction is my highest priority.
        </span>
      </div>
      <div className="item-about">
        <span className="bulb">
          <div className="item-about-image-holder">
            <i className="icons-font far fa-lightbulb"></i>
          </div>
        </span>
        <span className="item-abut-title">Intuitive</span>
        <span className="item-about-message">
          Strong preference for easy to use, intuitive UX/UI design.
        </span>
      </div>
      <div className="item-about">
        <span className="computer">
          <div className="item-about-image-holder">
            <i className="icons-font fas fa-credit-card"></i>
          </div>
        </span>
        <span className="item-abut-title">Responsive</span>
        <span className="item-about-message">
          My layouts will work on any device, big to small.
        </span>
      </div>
      <div className="item-about">
        <span className="rocket">
          <div className="item-about-image-holder">
            <i className="icons-font fas fa-rocket"></i>
          </div>
        </span>
        <span className="item-abut-title">Dynamic</span>
        <span className="item-about-message">
          Websites don't have to be static, I love making pages come to life.
        </span>
      </div>
    </div>
  );
}
