import React from 'react'
import './menu.scss'

function SocialIcons() {
  return (
    <div className="social-section">
      <ul className="social-icons">
        <li className="social-icon"><a href="https://www.linkedin.com/in/timotei-dumitru-1494ab160/" target="blank" rel="noopener noreferrer"><img src="./images/social-icons/linkedin.png" alt="LinkedIn"/></a></li>
        <li className="social-icon"><a href="https://github.com/ShokadinuEU" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/github.png" alt="Github"/></a></li>
        <li className="social-icon"> <a href="https://www.facebook.com/dumitru.timy" target="blank" rel="noopener noreferrer"><img src="./images/social-icons/facebook.png" alt="Facebook"/></a></li>
        <li className="social-icon"><a href="https://plus.google.com/u/0/112277218680998369339" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/googlePlus.png" alt="GooglePlus"/></a></li>
      </ul>
    </div>
  )
}

export default SocialIcons
