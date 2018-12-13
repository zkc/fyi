import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  base: {
    background: '#fffafa', 
    padding: '0 40px 50px 40px',
    fontFamily:  "'Noto Sans', 'sans-serif'",
    maxWidth: '800px',
    borderTopRightRadius: '50px',
    borderLeft: '25px solid #8b8378'

  },
  nameHeader: {
    fontSize: '4em', 
  },
  subHeader: {
    fontSize: '2em'
  }, 
  basicSection: {
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
    border: '1px solid #8b8378',
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

        <section className={classes.basicSection}>
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

        <section className={classes.basicSection}>
          <h3>Talks and Presentations</h3>
          <ul>
            <li>
              <a className={classes.link} 
                href="https://docs.google.com/presentation/d/1hzrjTMDvc1g6mIIzU2qMvs8z8d3YgzNMRC-Zg-QVozk/edit?usp=sharing">
                CSS Grid
              </a>
            </li> 
          </ul>
        </section>

        <hr className={classes.line}/>

        <section className={classes.basicSection}>
          <h3>Work Experience</h3>
          <div>
            <h4 className={classes.jobHeader}>Software Developer - Charter Communications</h4>
            <h5 className={classes.dates}>2017 - current</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Built our greenfield React UI with Redux. Continued to be a contributor and resource on React for the dev team. React is my strongest skill set so I jumped at the opportunity to initiate the codebase.
              </li>
              <li className={classes.bulletPoint}>
                Designed, implemented, and documented new architecture for our core automation functionality. Enjoyed the challenge of making something powerful enough for expanding needs, yet simple enough for less technical engineers to use directly.
              </li>
              <li className={classes.bulletPoint}>
                Trusted to diagnose and fix production issues in our legacy Python/Django system.
              </li>
              <li className={classes.bulletPoint}>
                Promoted dialogues within the full team resulting in better agile processes and improved clarity of product requirements.
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
                Established clear communication methods to convey detailed technical problems from our developers and designers to our end clients. Notably improved relations with a previously difficult client as a result.
              </li>
            </ul>
          </div>

          <div>  
            <h4 className={classes.jobHeader}>Lead Audio Engineer - Indiana University School of Music</h4>
            <h5 className={classes.dates}>2012 - 2014</h5>
            <ul>
              <li className={classes.bulletPoint}>
                Established the trust required for success in professional stage productions through dedication to the craft and strong interpersonal skills. 
              </li>
            </ul>
          </div>
        </section>

        <hr className={classes.line}/>

        <section className={classes.basicSection}>
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

        <section className={classes.basicSection}>
          <h4>Tech Interests</h4>
          <ul>
            <li>
              Distributed applications, blockchain technology, Web 3
            </li>
            <li>
              Content Creator focused platforms, digital community building
            </li>
            <li>
              Game design
            </li>
          </ul>
          <h4>Fun Stuff</h4>
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
        <a className={classes.link} 
          href='https://docs.google.com/document/d/10n4e5GJmGNMHm6Xgc-7rUQ7fCTa7cHDzdTPT1K87VJo/edit?usp=sharing'>
          resume in doc format
        </a>
        
      </div>

    )
  }
}

export default injectSheet(styles)(App)
