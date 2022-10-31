import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function TopMenu() {
  return (
    <div>
      <div className="right-menu">
        <div className="group-1">
          <div className="rectangle">
            <Link to={"/menu"}>
              <div className="button-text-home">start project</div>
            </Link>
          </div>
        </div>
        <div className="group">
          <Link to={"/menu"}>
            <div className="path-1"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
