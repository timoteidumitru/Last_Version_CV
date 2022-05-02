import React from "react";
import NavAbout from "../about/TopNav";
import Footer from "../about/Footer";
import "./work.scss";
import "../../App.scss";

const Index = () => {
  const projects = [
    {
      name: "Country Info App",
      img: "images/my-work/country-info-app.jpg",
      sampleLink: "https://timoteidumitru.github.io/countries_info_app/",
      gitLink: "https://github.com/timoteidumitru/countries_info_app",
    },
    {
      name: "Recipe Finder App",
      img: "images/my-work/recipe-finder-app.jpg",
      sampleLink: "https://timoteidumitru.github.io/recipe_finder-app/#46956",
      gitLink: "https://github.com/timoteidumitru/recipe_finder-app",
    },
    {
      name: "Products sorting JavaScript",
      img: "images/my-work/shopping-cart-typescript.jpg",
      sampleLink: "https://github.com/timoteidumitru/shopping_cart_typescript",
      gitLink: "https://github.com/timoteidumitru/shopping_cart_typescript",
    },
    {
      name: "Phase 8",
      img: "images/my-work/phase-8.jpg",
      sampleLink: "https://timoteidumitru.github.io/phase-eight/",
      gitLink: "https://github.com/timoteidumitru/phase-eight",
    },
    {
      name: "Get Weather App",
      img: "images/my-work/weather-app.jpg",
      sampleLink: "https://timoteidumitru.github.io/get-weather-app/",
      gitLink: "https://github.com/timoteidumitru/get-weather-app",
    },
    {
      name: "Development Website",
      img: "images/my-work/development-website.jpg",
      sampleLink: "https://timoteidumitru.github.io/development-website/",
      gitLink: "https://github.com/timoteidumitru/development-website",
    },
    {
      name: "Type-n-Speak",
      img: "images/my-work/type-n-speak.jpg",
      sampleLink: "https://timoteidumitru.github.io/type_n_speak_app/",
      gitLink: "https://github.com/timoteidumitru/type_n_speak_app",
    },
    {
      name: "React Cool Apps",
      img: "images/my-work/react-apps.jpg",
      sampleLink: "https://timoteidumitru.github.io/react-cool-apps/",
      gitLink: "https://github.com/timoteidumitru/react-cool-apps",
    },
    {
      name: "Secure Register/Login System",
      img: "images/my-work/secure-login-main.jpg",
      sampleLink:
        "https://github.com/timoteidumitru/secure_register_login_system",
      gitLink: "https://github.com/timoteidumitru/secure_register_login_system",
    },
  ];

  return (
    <div id="work" className="work-main">
      <NavAbout />
      <div className="content-work">
        <div className="work-header">
          <h1 className="lg-heading">
            My
            <span className="text-secondary"> Work </span>
          </h1>
          <h2 className="sm-heading">
            Check out some of my personal projects!
          </h2>
        </div>
        <div className="projects">
          {projects.map((project, i) => (
            <div className="item" key={i}>
              <button>
                <img
                  className="project-img"
                  src={project.img}
                  alt={project.name}
                />
              </button>
              <button className="btn-light">
                <a
                  href={project.sampleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <i className="fas fa-eye">{project.name} - View </i>
                </a>
              </button>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github"> GitHub </i>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
