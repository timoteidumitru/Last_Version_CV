import React, { Component } from "react";
import "./about.scss";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "HTML",
          level: "100%",
        },
        {
          name: "CSS",
          level: "100%",
        },
        {
          name: "JavaScript",
          level: "100%",
        },
        {
          name: "ReactJS",
          level: "100%",
        },
        {
          name: "NodeJS",
          level: "100%",
        },
        {
          name: "ExpressJS",
          level: "100%",
        },
        {
          name: "MongoDB",
          level: "100%",
        },
      ],
    };
  }
  render() {
    const skills = this.state.data;
    return (
      <div className="about-content-wrapper">
        <div className="about-content-first">
          <div className="about-content-first-img">
            <img width="250" src="images/main-photo.jpg" alt="main pic" />
          </div>
          <div className="about-content-first-title">Who am I?</div>
          <div className="about-content-first-description">
            I'm a Freelance Web Developer. <br />
            I have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
            <br />
            <span>Let's make something special and/or have some fun!</span>
          </div>
        </div>
        <div className="about-content-second">
          {skills.map((skill, i) => (
            <div key={i}>
              <span className="skill-name">{skill.name}</span>{" "}
              <Progress percent={parseInt(skill.level)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
