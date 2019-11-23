import React from "react";
import "./menu.scss";

function SocialIcons() {
  return (
    <div className="social-section">
      <ul className="social-icons">
        <li className="social-icon">
          <a
            href="https://www.linkedin.com/in/timotei-dumitru-1494ab160/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="./images/social-icons/linkedin.png" alt="L" />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://github.com/ShokadinuEU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/social-icons/github.png" alt="G" />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://shokadinueu.github.io/phase-eight/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="./images/social-icons/portofolio.png" alt="P" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
