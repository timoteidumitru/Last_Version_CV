import React, { Component } from 'react'
import './work.scss'
import '../../App.scss'

export default class Index extends Component {
  render() {
    return (
      <div id="work" className="work-main">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">
          Check out some of my projects!
        </h2>
        <div className="projects">
          {/* <!-- First Item --> */}
          <div className="item">
            <a href="#!">
              <img className="project-img" src="/images/my-work/fashion-today.jpg" alt="Latest Project" />
            </a>
            <a href="#" rel="noopener noreferrer" className="btn-light">
              <i className="fas fa-eye"></i> Fashion Today
            </a>
            <a href="https://shokadinueu.github.io/fashion-today/" target="_blank" rel="noopener noreferrer" className="btn-dark">
              <i className="fab fa-github"> GitHub </i> 
            </a>
          </div>
          {/* <!-- Second Item --> */}
          <div className="item">
            <a href="#!">
              <img className="project-img" src="/images/my-work/development-website.jpg" alt="Development Website" />
            </a>
            <a href="#" rel="noopener noreferrer" className="btn-light">
              <i className="fas fa-eye"></i> Development Website
            </a>
            <a href="https://shokadinueu.github.io/development-website/" target="_blank" rel="noopener noreferrer" className="btn-dark">
              <i className="fab fa-github"> GitHub </i> 
            </a>
          </div>
          {/* <!-- Third Item --> */}
          <div className="item">
            <a href="#!">
              <img className="project-img" src="/images/my-work/weather-app.jpg" alt="Get Weather APP" />
            </a>
            <a href="#" rel="noopener noreferrer" className="btn-light">
              <i className="fas fa-eye"></i> Get Weather App
            </a>
            <a href="https://shokadinueu.github.io/get-weather-app/" target="_blank" rel="noopener noreferrer" className="btn-dark">
              <i className="fab fa-github">  GitHub</i>
            </a>
          </div>
          {/* <!-- Fourth Item --> */}
          <div className="item">
            <a href="#!">
              <img className="project-img" src="/images/my-work/type-n-speak.jpg" alt="Type-n-Speak" />
            </a>
            <a href="#" rel="noopener noreferrer" className="btn-light">
              <i className="fas fa-eye"></i> Type-n-Speak
            </a>
            <a href="https://shokadinueu.github.io/type_n_speak_app/" target="_blank" rel="noopener noreferrer" className="btn-dark">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          {/* <!-- Fifth Item --> */}
          <div className="item">
            <a href="#!">
              <img className="project-img" src="/images/my-work/apple-stock.jpg" alt="Apple Stock" />
            </a>
            <a href="#" rel="noopener noreferrer" className="btn-light">
              <i className="fas fa-eye"></i> Apple Stock App
            </a>
            <a href="https://shokadinueu.github.io/apple-stock-info/" target="_blank" rel="noopener noreferrer" className="btn-dark">
              <i className="fab fa-github"> GitHub </i> 
            </a>
          </div>
          {/* <!-- Sixth Item --> */}
          <div className="item">
            <a href="#!">
              <img className="project-img" src="/images/my-work/first-cv-online.jpg" alt="First CV" />
            </a>
            <a href="#" rel="noopener noreferrer" className="btn-light">
              <i className="fas fa-eye"></i> First CV
            </a>
            <a href="https://shokadinueu.github.io/my-CV" target="_blank" rel="noopener noreferrer" className="btn-dark">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    )
  }
}
