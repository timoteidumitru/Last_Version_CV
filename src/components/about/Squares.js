import React from 'react'

export default function Square() {
  return (
    <div>
      <div className="item-about">
        <span className="clock">
          <i class="fas fa-tachometer-alt"></i>
        </span>
        <span className="item-abut-title">
          Fast
        </span> 
        <span className="item-about-message">
          Fast loading time and lag free interaction is my highest priority.
        </span>
      </div>
      <div className="item-about">
        <span className="bulb">
          <i class="far fa-lightbulb"></i>
        </span>
        <span className="item-abut-title">
          Intuitive
        </span> 
        <span className="item-about-message">
          Strong preference for easy to use, intuitive UX/UI design.
        </span>
      </div>
      <div className="item-about">
        <span className="computer">
          <i class="fas fa-credit-card"></i>
        </span>
        <span className="item-abut-title">
          Responsive
        </span> 
        <span className="item-about-message">
          My layouts will work on any device, big to small.
        </span>
      </div>
      <div className="item-about">
        <span className="rocket">
          <i class="fas fa-rocket"></i>
        </span>
        <span className="item-abut-title">
          Dynamic
        </span> 
        <span className="item-about-message">
          Websites don't have to be statis, I love making pages come to life.
        </span>
      </div>
    </div>
  )
}
