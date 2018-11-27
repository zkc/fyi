import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  base: {
    background: 'lightblue', 
    padding: '0 40px',
    fontFamily:  "'Noto Sans', 'sans-serif'",
  },
  nameHeader: {
    fontSize: '4em', 
  },
  subHeader: {
    fontSize: '2em'
  }, 
  skillsSection: {
    paddingLeft: '20px'
  }
}


class App extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.base}>
        <header className={classes.nameHeader}>Kyle Zucker</header>
        <header className={classes.subHeader}>Software Developer</header>

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
          </ul>
        </section>

        <section className={classes.skillsSection}>
          <h3>Work Experience</h3>
          <section>
            <h4>Software Developer - Charter Communications</h4>
            <h5>2017 - current</h5>
            <ul>
              <li>
                Built our greenfield React UI with Redux. Continued to be a resource on React for dev team. React is my strongest skill set so I jumped at the opportunity to initiate the codebase.
              </li>
              <li>
                Designed, implemented, and documented new architecture for our core automation functionality. Enjoyed the challenge of making something powerful enough for our expanding needs yet simple enough for less technical engineers to use directly.
              </li>
              <li>
                Handled API design decisions when called upon by the dev team.
              </li>
              <li>
                Became a first contact for fixing issues in our legacy Python/Django system. 
              </li>
              <li>
                Promoted dialogues within the group and man resulting in better agile procedures and improved clarity and documentation of product requirements. 
              </li>
            </ul>
          </section>
        </section>
      </div>

    )
  }
}

export default injectSheet(styles)(App)
