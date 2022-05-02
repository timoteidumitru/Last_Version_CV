import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer-main">
        <div className="footer-wrapper">
          <div className="footer-links">
            <div className="menu-footer">
              <ul>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/work">Work</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-address">
              <span>London, UK</span>
              <span>E4 ---</span>
              <span>07376-******</span>
              <span>dumitru.timy@gmail.com</span>
            </div>
            <div className="footer-social">
              <span>
                <a
                  href="https://www.linkedin.com/in/timoteidumitru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedIn
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/timoteidumitru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/dumitru.timy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </span>
              <span>
                <a
                  href="https://timoteidumitru.github.io/recipe_finder-app/#46956"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portofolio
                </a>
              </span>
            </div>
          </div>
          <div className="footer-designer">
            <div className="name-footer">
              Timotei Dumitru. All rights reserved 2018
            </div>
            <div className="designer-footer">Design by Nespoulous Design</div>
          </div>
        </div>
      </div>
    </div>
  );
}
