import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  base: {
    background: '#ffcea3', 
    padding: '0 40px 50px 40px',
    fontFamily:  "'Noto Sans', 'sans-serif'",
    maxWidth: '1000px',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px'

  },
  nameHeader: {
    fontSize: '4em', 
  },
  subHeader: {
    fontSize: '2em'
  }, 
  skillsSection: {
    paddingLeft: '20px'
  },
  jobHeader: {
    display: 'inline-block',
    margin: '20px 0 0 0'
  },
  dates: {
    margin: '0 30px',
    display: 'inline-block'
  },
  bulletPoint: {
    marginTop: '20px'
  }, 
  link: {
    display: 'inline-block',
    color: '#191511', 
    margin: '10px 20px'
  }, 
  line: {
    border: '1px solid #000',
  }
}


class App extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.base}>
        <header className={classes.nameHeader}>Kyle Zucker</header>
        <header className={classes.subHeader}>Software Developer</header>

        <a className={classes.link} href='mailto:zkyle12@gmail.com?Subject=Hello%20There!'>email</a>
        <a className={classes.link} href='https://github.com/zkc'>github</a>

        <hr className={classes.line}/>

        <section className={classes.skillsSection}>
          <h3>Skills</h3>
          <ul>
            <li>React</li> 
            <li>Redux</li> 
            <li>Javascript</li> 
            <li>Node/Express</li> 
            <li>Jest</li> 
            <li>Enzyme</li> 
            <li>Python</li> 
            <li>Django</li> 
            <li>Material-UI</li> 
            <li>CSS Grid</li>
            <li>HTML</li>
            <li>NoSQL/MongoDB</li>
            <li>SQL</li>
          </ul>
        </section>

        <hr className={classes.line}/>

        <section className={classes.skillsSection}>
          <h3>Work Experience</h3>
          <div>
            <h4 className={classes.jobHeader}>Software Developer - Charter Communications</h4>
            <h5 className={classes.dates}>2017 - current</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Built our greenfield React UI with Redux. Continued to be a resource on React for dev team. React is my strongest skill set so I jumped at the opportunity to initiate the codebase.
              </li>
              <li className={classes.bulletPoint}>
                Designed, implemented, and documented new architecture for our core automation functionality. Enjoyed the challenge of making something powerful enough for our expanding needs yet simple enough for less technical engineers to use directly.
              </li>
              <li className={classes.bulletPoint}>
                Handled API design decisions when called upon by the dev team.
              </li>
              <li className={classes.bulletPoint}>
                Became a first point of contact for fixing issues in our legacy Python/Django system. 
              </li>
              <li className={classes.bulletPoint}>
                Promoted dialogues within the group and man resulting in better agile processes and improved clarity of product requirements. 
              </li>
            </ul>
          </div>

          <div>
            <h4 className={classes.jobHeader}>Project Manager - Bastian Software Solutions</h4>
            <h5 className={classes.dates}>2014 - 2016</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Worked in tandem with developers to implement custom software for warehouse logistics systems, often on-site. My primary tool was SQL with MS SQL Server.
              </li>
              <li className={classes.bulletPoint}>
                Established clear communications to convey detailed technical problems from our developers and designers to the end clients. Notably improved relations with a previously difficult client as a result.
              </li>
            </ul>
          </div>

          <div>  
            <h4 className={classes.jobHeader}>Lead Audio Engineer - Indiana University School of Music</h4>
            <h5 className={classes.dates}>2012 - 2014</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Established the trust required for success in professional stage productions thru dedication to the craft.
              </li>
            </ul>
          </div>
        </section>

        <hr className={classes.line}/>

        <section>
          <h3>Education</h3>

          <div>
            <h4 className={classes.jobHeader}>Turing School of Software and Design, Denver CO</h4>
            <h5 className={classes.dates}>Front End Development - 2016</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Full time course to expand and sharpen my skill set for modern web development teams. React and Javascript focused.
              </li>
            </ul>
          </div>

          <div>
            <h4 className={classes.jobHeader}>Indiana University, Bloomington IN</h4>
            <h5 className={classes.dates}>Bachelor of Science in Recording Arts, Informatics - 2012</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Studied the fundamentals of programming and logical thinking. Also made a significant amount of recordings.
              </li>
            </ul>
          </div>
        </section>

        <hr className={classes.line}/>

        <section>
          <h3>Fun Stuff</h3>
          <ul>
            <li>
              Grew up playing drums, currently play guitar.
            </li>
            <li>
              Volunteer as a code instructor for after school programs at local elementary schools.
            </li>
            <li>
              Favorite video game is Path of Exile. 
            </li>
          </ul>
        </section>

        <a className={classes.link} href='mailto:zkyle12@gmail.com?Subject=Hello%20There!'>email</a>
        <a className={classes.link} href='https://github.com/zkc'>github</a>
        
      </div>

    )
  }
}

export default injectSheet(styles)(App)
