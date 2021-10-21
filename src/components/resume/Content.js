import React from "react";

export default function Content() {
  const projects = [
    {
      id: 1,
      name: "Recipe Finder App",
      period: "",
      featureLearned: {
        1: "Using JavaScript(ES5 / ES6) for MVC design pattern.",
        2: "For automation was made use of webpack",
        3: "Numbers formatting have been made using fractional library",
        4: "For browser compatibility babel(transcompiler) was added to the project",
        5: "Some exposure to transitions and animations.",
        6: "I've make use of axios to make call to external API",
      },
    },
    {
      id: 2,
      name: "Phase Eight(replica)",
      period: "",
      featureLearned: {
        1: "Front End development using React.",
        2: "Application state management using React Hooks.",
        3: "Page routing using React Router Dom.",
        4: "Materialize CSS for styling the components.",
        5: "Exposure to transitions and animations in React (Material UI).",
        6: "Using  AOS(animate on scroll) as mentioned in the design.",
      },
    },
    {
      id: 3,
      name: "Online CV",
      period: "",
      featureLearned: {
        1: "Front End development using React.",
        2: "Page routing using React Router Dom.",
        3: "For styling I’ve use SASS and media queries to make it full responsive.",
        4: "Exposure to transitions and animations in React (CSS).",
        5: "Design implemented in Invision Studio Lab.",
        6: "Exposure to Google Maps API.",
      },
    },
    {
      id: 4,
      name: "Get Weather App",
      period: "",
      featureLearned: {
        1: "Application developed in React.",
        2: "Fetch data from openweathermap API. ",
        3: "Gain experience with data visualization from API.",
        4: "Building responsive with mobile first approach pattern.",
        5: "Exposure to dynamic programming.",
        6: "Exposure to application state management.",
      },
    },
  ];

  const education = [
    {
      id: 1,
      where: '"FREECODECAMP" SELF-TAUGHT - LONDON, UK',
      field: "Field: Web Development",
      specialization: "Specialization:  Front End development",
    },
    {
      id: 2,
      where: '"VALAHIA" UNIVERSITY - TARGOVISTE, RO',
      field: "Field: Electric Engineering",
      specialization: "Specialization: Energetics",
    },
  ];

  return (
    <div>
      <div className="content-main">
        <div className="content-wrapper">
          <div className="about-page">
            <span className="about-main-name">Resume</span>
          </div>
          <div className="content-header">
            <p>
              I’m a FrontEnd Developer specialized in JavaScript tech stack,
              having experience with TypeScript, ReactJS. Being an advocate of
              continuous self improvement I look for a company that uses Agile
              methodologies where I can perform my skills as a FrontEnd Web
              Developer.
            </p>
          </div>
          <h2>Personal projects</h2>
          <div className="work-experience">
            {projects.map((job) => (
              <div key={job.id} className="work-one">
                <h4>
                  {job.name} &nbsp;&nbsp; <span>{job.period}</span>
                </h4>
                <ul>
                  {Object.values(job.featureLearned).map((feature, i) => (
                    <li key={i}>- {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="education-main">
            <h2>Education</h2>
            {education.map((e) => (
              <div key={e.id} className="education-specialization">
                <h4 className="education-institute">{e.where}</h4>
                <p className="education-specialization">
                  &nbsp;&nbsp;&nbsp;&nbsp; +&nbsp;{e.field} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>&nbsp;&nbsp;&nbsp; - {e.specialization}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
