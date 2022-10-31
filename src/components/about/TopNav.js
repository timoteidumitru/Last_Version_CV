import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";

const TopNav = () => {
  return (
    <Link to={"/menu"}>
      <div className="nav-activator-about">
        <button type="button" className="go-menu"></button>
      </div>
    </Link>
  );
};

export default TopNav;
