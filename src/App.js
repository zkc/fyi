import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import pic from './img/medemo.jpg'

const styles = theme => ({
  base: {
    width: '100%', 
    margin: 0, 
    padding: 0  
  },
  banner: {
    background: 'lightblue', 
    width: '100%', 
    padding: '30px 0',
    color: 'white',
    fontSize: '5em'
  }, 
  hello: {
    background: 'lightgreen', 
    width: '100%',
    color: 'white',
  }, 
  intro: {
    background: 'pink', 
    width: '100%', 
    color: 'white', 
    padding: '40px 0'
  }, 
  mainPic: {
    display: 'block',
    height: '200px',
    borderRadius: '100%',
    margin: '0 auto'
  }
})


class App extends React.Component {
  
  render() {
    const { classes } = this.props
    // const { basics, quote, bio, projects, resume, contact } = this.props
    return (
      <div className={classes.base}>

        <Typography 
          className={classes.banner}
          align='center'
          variant='display3'
        >Curiousity, Interest, Insight</Typography>

        <Typography
          className={classes.hello}
          align='center'
          variant='display2'
        >Hi friend! I'm Kyle Zucker.</Typography>
        <Typography
          className={classes.intro}
          align='center'
          variant='display1'
        >Code is one of my favorite tools, I'm fortunate to be able use it in my career</Typography>

        <img src={pic} alt='Kyle smiling' className={classes.mainPic} />

        <Paper>

        </Paper>
        {/* <Listdemo /> */}
      </div >





    )
  }
}

export default withStyles(styles)(App);
