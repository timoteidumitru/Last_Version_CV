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
              <span>linkedIn</span>
              <span>github</span>
              <span>facebook</span>
              <span>google+</span>
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
