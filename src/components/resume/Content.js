import React from "react";

export default function Content() {
  const jobs = [
    {
      id: 0.5,
      name: "Phase Eight(replica)",
      period: "2-3 Months Project",
      featureLearned: {
        1: "Front End development using React.",
        2: "Application state management using React Hooks.",
        3: "Page routing using React Router Dom.",
        4: "Materialize CSS for styling the components.",
        5: "Exposure to transitions and animations in React (Material UI).",
        6: "Using  AOS(animate on scroll) as mentioned in the design."
      }
    },
    {
      id: 1,
      name: "Online CV",
      period: "2-3 Mounths Project",
      featureLearned: {
        1: "Front End development using React.",
        2: "Page routing using React Router Dom.",
        3: "For styling I’ve use SASS and media queries to make it full responsive.",
        4: "Exposure to transitions and animations in React (CSS).",
        5: "Design implemented in Invision Studio Lab.",
        6: "Exposure to Google Maps API."
      }
    },
    {
      id: 2,
      name: "Get Weather App",
      period: "2 Months Project",
      featureLearned: {
        1: "Application developed in React.",
        2: "Fetch data from openweathermap API. ",
        3: "Gain experience with data visualization from API.",
        4: "Building responsive with mobile first approach pattern.",
        5: "Exposure to dynamic programming.",
        6: "Exposure to application state management."
      }
    }
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
              My problem-solving ability is applied throughout all aspects of my
              life, and I am continuously seeking to gain knowledge. When not
              gaining this knowledge in a coding environment, I am an advocate
              for self-improvement and am always striving to better my physical
              and mental health.
            </p>
          </div>
          <h2>Personal projects</h2>
          <div className="work-experience">
            {jobs.map(job => (
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
          <div className="education-main"></div>
        </div>
      </div>
    </div>
  );
}
