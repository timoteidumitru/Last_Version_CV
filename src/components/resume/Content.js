import React from "react";

export default function Content() {
  const projects = [
    {
      id: 1,
      name: "Recipe Finder App",
      period: "",
      featureLearned: {
        1: "Using JavaScript(ES5/ES6)",
        2: "For tooling linting, webpack, babel",
        3: "Numbers formatting have been made using fractional library",
        4: "Some exposure to transitions and animations.",
        5: "Axios was used to make API calls",
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
      name: "Secure Register/Login System",
      period: "",
      featureLearned: {
        1: "Front End development using React with following features: ",
        2: "Hooks, Styled Components, Font Awesome, Axios and React Router",
        3: "Back End developed in NodeJS and ExpressJS with following features: ",
        4: "JWT, uuid, bcrypt, cookie parser, cors, date fns, dotend, concurently",
        5: "Databese used: MongoDB(cloud) with mongoose for quering data",
        6: "Other features: redirect upon register/login, validation checking",
      },
    },
    {
      id: 4,
      name: "Get Weather App",
      period: "",
      featureLearned: {
        1: "Application developed in React.",
        2: "Fetch data from openweathermap API using Axios. ",
        3: "Gain experience with data visualization from API.",
        4: "Building responsive with mobile first approach pattern.",
        5: "Exposure to dynamic programming.",
        6: "Exposure to application state management aka Hooks/Context.",
      },
    },
  ];

  const education = [
    {
      id: 1,
      where: '"Software Mastery CWD - LONDON, UK',
      field: "Field: Full Development Lifecycle",
      specialization: "From Design to Deployment",
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
              I’m a FrontEnd Developer specialized in JavaScript stack, having
              experience with React and TypeScript. Being an advocate of
              continuous self improvement I'm lookking for a company that uses
              Agile methodologies where I can perform my skills as a FrontEnd
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
