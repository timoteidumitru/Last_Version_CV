import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer-main">
        <div className="footer-wrapper">
          <div className="footer-links">
            <div className="menu-footer">
              <ul>
                <li>home</li>
                <li>work</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
            <div className="footer-address">
              <span>London, UK</span>
              <span>E4 ---</span>
              <span>07376-548077</span>
              <span>dumitru.timy@gmail.com</span>
            </div>
            <div className="footer-social">
              <span>
                <a
                  href="https://www.linkedin.com/in/timotei-dumitru-1494ab160/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedIn
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/ShokadinuEU"
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
                  href="https://shokadinueu.github.io/recipe_finder-app/"
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
