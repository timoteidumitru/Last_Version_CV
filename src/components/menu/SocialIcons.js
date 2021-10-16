import React from "react";
import "./menu.scss";

function SocialIcons() {
  return (
    <div className="social-section">
      <ul className="social-icons">
        <li className="social-icon">
          <a
            href="https://www.linkedin.com/in/timoteidumitru/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="./images/social-icons/linkedin.png" alt="L" />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://github.com/timoteidumitru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/social-icons/github.png" alt="G" />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://timoteidumitru.github.io/recipe_finder-app/"
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
