import React from 'react'
import NavAbout from '../about/TopNav'
import Footer from '../about/Footer'
import './work.scss'
import '../../App.scss'

const Index = () => {
  return (
    <div id="work" className="work-main">
      <NavAbout />
      <div className="work-header">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">
          Check out some of my projects!
        </h2>
      </div>
      <div className="projects">
        {/* <!-- First Item --> */}
        <div className="item">
          <button>
            <img className="project-img" src="images/my-work/fashion-today.jpg" alt="Latest Project" />
          </button>
          <button className="btn-light">
            <i className="fas fa-eye"></i> Fashion Today
          </button>
          <a href="https://shokadinueu.github.io/fashion-today/" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <i className="fab fa-github"> GitHub </i> 
          </a>
        </div>
        {/* <!-- Second Item --> */}
        <div className="item">
          <button>
            <img className="project-img" src="images/my-work/development-website.jpg" alt="Development Website" />
          </button>
          <button className="btn-light">
            <i className="fas fa-eye"></i> Development Website
          </button>
          <a href="https://shokadinueu.github.io/development-website/" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <i className="fab fa-github"> GitHub </i> 
          </a>
        </div>
        {/* <!-- Third Item --> */}
        <div className="item">
          <button>
            <img className="project-img" src="images/my-work/weather-app.jpg" alt="Get Weather APP" />
          </button>
          <button className="btn-light">
            <i className="fas fa-eye"></i> Get Weather App
          </button>
          <a href="https://shokadinueu.github.io/get-weather-app/" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <i className="fab fa-github">  GitHub</i>
          </a>
        </div>
        {/* <!-- Fourth Item --> */}
        <div className="item">
          <button>
            <img className="project-img" src="images/my-work/type-n-speak.jpg" alt="Type-n-Speak" />
          </button>
          <button className="btn-light">
            <i className="fas fa-eye"></i> Type-n-Speak
          </button>
          <a href="https://shokadinueu.github.io/type_n_speak_app/" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
        {/* <!-- Fifth Item --> */}
        <div className="item">
          <button>
            <img className="project-img" src="images/my-work/apple-stock.jpg" alt="Apple Stock" />
          </button>
          <button className="btn-light">
            <i className="fas fa-eye"></i> Apple Stock App
          </button>
          <a href="https://shokadinueu.github.io/apple-stock-info/" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <i className="fab fa-github"> GitHub </i> 
          </a>
        </div>
        {/* <!-- Sixth Item --> */}
        <div className="item">
          <button>
            <img className="project-img" src="images/my-work/first-cv-online.jpg" alt="First CV" />
          </button>
          <button className="btn-light">
            <i className="fas fa-eye"></i> First CV
          </button>
          <a href="https://shokadinueu.github.io/my-CV" target="_blank" rel="noopener noreferrer" className="btn-dark">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index