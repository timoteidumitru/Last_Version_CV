import React from 'react'

export default function Content() {

  const jobs = [
    {
      id: 0.5,
      period: '2019 Mar – present',
      company: 'Freelance',
      possition: 'Web Developer',
      featureLearned: 
        {
          1: 'Building experiences which meet UX/UI expectations from quick prototypes to fully fledged products and being able to feedback improvements proactively where new technologies may have enabled better solutions.',
          2: 'Code and deliver projects to the defined requirements (JavaScript / React / HTML / CSS).',
          3: 'Responsible for problem solving and decision making to enhance the function of the webpage.',
          4: 'Provide knowledge on evolving principles of design, promoting comprehensive research into new design ideas (HTML5/CSS3/JavaScript).',
          5: 'Technologies used: React, HTML, CSS, JavaScript, SASS, EcmaScript 6/7/8, NodeJS, ExpressJS, MongoDB'
        }
    },
    {
      id: 1,
      period: '2017 Jun – 2019 Mar',
      company: 'BitBee',
      possition: 'Junior Front End Developer',
      featureLearned: 
        {
          1: 'I\'ve built single and multi page websites using responsive web design or fluid typography with mobile first approach.',
          2: 'I\'ve used custom icons to improve loading speeds and make it easier to maintain.',
          3: 'I\'ve optimised the websites in loading speed minifying JavaScript, CSS and HTML, reducing the number of requests to the server.',
          4: 'I\'ve oprimized images by compressing them for faster transfer load of the page.',
          5: 'I\'ve learned how to prioritize the visible content for a feaster load of the page.',
          6: 'I\'ve worked and deployed in development and production environments.'
        }
    },
    {
      id: 2,
      period: '2015 Jan – 2016 Jun',
      company: 'FiberLink',
      possition: 'Network Technician',
      featureLearned: 
        {
          1: 'Develop and maintain local networks in ways that optimize performance.',
          2: 'Ensure security and privacy of networks and computer systems.',
          3: 'Organize and schedule upgrades and maintenance without deterring others from completing their work.',
          4: 'Provide technical support to clients through various channels of communication.',
          5: 'Manage and support LAN and WAN Network devices.'
        }
    },
    {
      id: 3,
      period: '2012 Oct – 2014 Dec',
      company: 'Computers Warehouse',
      possition: 'IT Technician',
      featureLearned: 
        {
          1: 'Set up workstations with computers and necessary peripheral devices (routers, printers etc)',
          2: 'Check computer hardware (HDD, mouse, keyboard etc.) to ensure functionality.',
          3: 'Install and configure appropriate software and functions according to specifications.',
          4: 'Provide orientation and guidance to users on how to operate new software and computer equipment.',
          5: 'Perform troubleshooting to diagnose and resolve problems (repair or replace parts, debugging etc)',
          6: 'Identify computer or network equipment shortages and place orders.'
        }
    }
  ]

  return (
    <div>
      <div className="content-main">
        <div className="content-wrapper">
          <div className="about-page">
            <span className="about-main-name">
              Resume
            </span>
          </div>
          <div className="content-header">
            <p>I'm a self-taught person who have one big regret, and that is that I didn't start earlier this path of web development and programming in general.</p>
            <p>The pleasure I gain from "climbing" something that seems "unclimbable" is way too big, that’s why I study every day.</p>
          </div>
          <h2>My Experience</h2>
          <div className="work-experience">
            {
              jobs.map(job => 
                <div key={job.id} className="work-one">
                  <h4><span>{job.period}</span> &nbsp;&nbsp; {job.company}</h4>
                  <h5>{job.possition}</h5>
                  <ul>
                    { Object.values(job.featureLearned).map((feature, i) => 
                      <li key={i}>
                        - { feature }
                      </li>
                    )}
                  </ul>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
