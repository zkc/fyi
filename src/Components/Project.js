import React from 'react'


const Project = ({ title, description, iframe_link }) => (
  <div className="single-project">
    <div className="intro">
      <span style={{ fontStyle: 'italic', fontSize: '2em'  }}>{title}</span>
      <p>{description}</p>
    </div>
    {iframe_link && <iframe src={iframe_link} frameborder="0" width="100%" height="100%" />}
  </div>
)


export default Project