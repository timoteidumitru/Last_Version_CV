import React from "react";
import TopMenu from "./TopMenu";
import LeftName from "./LeftName";
import HeaderText from "./HeaderText";
import "./header.scss";

const Index = () => {
  return (
    <div className="landing-page">
      <TopMenu />
      <LeftName />
      <HeaderText />
    </div>
  );
};

export default Index;
