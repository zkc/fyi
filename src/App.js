import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  base: {
    background: 'lightblue', 
    padding: '0 40px',
    font: ''
  },
  nameHeader: {
    fontSize: '2em'
  }
}


class App extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.base}>
        <header className={classes.nameHeader}>Kyle Zucker</header>
      </div>

    )
  }
}

export default injectSheet(styles)(App)
