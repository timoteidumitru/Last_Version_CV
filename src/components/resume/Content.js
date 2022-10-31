import React from "react";

export default function Content() {
  const projects = [
    {
      id: 1,
      name: "Country Info",
      featureLearned: {
        1: "State Management: ContextAPi + useState",
        2: "Numbers fortatting",
        3: "Mobile and Desktop Responsive",
        4: "Theme change",
        5: "Sorting filtering of data received from API",
        6: "Pagination",
        7: "Hooks / Custom Hooks",
        8: "React routing system",
        9: "Font Awesome for icons",
        10: "Axios for http request to API",
      },
    },
    {
      id: 2,
      name: "Get Weather App",
      featureLearned: {
        1: "Application developed in React.",
        2: "Fetch data from openweathermap API using Axios. ",
        3: "Gain experience with data visualization from API.",
        4: "Responsive with mobile first approach pattern.",
        5: "Exposure to dynamic programming.",
        6: "Exposure to application state management aka Hooks/Context.",
      },
    },
    {
      id: 3,
      name: "Recipe Finder App",
      featureLearned: {
        1: "Using JavaScript(ES5/ES6)",
        2: "For tooling linting, webpack, babel",
        3: "Numbers formatting have been made using fractional library",
        4: "Some exposure to transitions and animations.",
        5: "Axios to make API calls",
        6: "MVC design pattern",
        7: "Local Storage usage",
      },
    },
    {
      id: 4,
      name: "Phase Eight(replica)",
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
      id: 5,
      name: "Secure Register/Login System",
      featureLearned: {
        1: "Other features: redirect upon register/login, validation checking",
        2: "Hooks, Styled Components, Font Awesome, Axios and React Router",
        3: "Back End developed in NodeJS and ExpressJS with following features: ",
        4: "JWT, uuid, bcrypt, cookie parser, cors, date fns, dotend, concurently",
        5: "Databese used: MongoDB(cloud) with mongoose for quering data",
      },
    },
    {
      id: 6,
      name: "Shopping Cart TypeScript",
      featureLearned: {
        1: "Show list of products",
        2: "Possibility to add items to cart directly in list of products table",
        3: "Possibility to remove items from cart directly in list of products table",
        4: "Posibility to sort products by categories and price by desc or asc.",
        5: "From cart add possibility to change quantity of added products.",
        6: "From cart add possibility to remove added product.",
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
              I'am a Frontend Developer with experience in JavaScript (ES6+),
              React, Vue and Angular. Have experience working in a team
              environment using Git and Agile methodologies. Looking for
              organizations where I can use my skills to contribute as a
              Frontend Developer.
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
