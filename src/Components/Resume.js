import React from 'react'

import '../Style/Resume.css'


const Resume = ({ positions, link }) => {
  return (
    <div id="resume" className="resume">
      {positions.map(job => (
        <div className="job" key={job.title}>
          <h1 className="title">{job.title}</h1>
          <h2 className="location">{job.location}</h2>
          <ul className="points">
            {job.points.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
      <a className="resume-link" href={link}>Paper Resume</a>
    </div>
  )
}


export default Resume
