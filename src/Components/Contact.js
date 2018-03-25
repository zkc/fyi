import React from 'react'

import '../Style/Contact.css'


const Contact = ({ email, github }) => (
  <section id="contact" className="contact">
    <a href={`mailto:${email}?Subject=Contact%20Kyle`} className="contact-link">email</a> 
    <a href={github} className="contact-link">github</a>
  </section>
)


export default Contact
