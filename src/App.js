import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


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
    margin: '20px auto'
  }, 
  chip: {
    margin: theme.spacing.unit,
  }, 
  skills: {
    padding: '30px 20px'
  }
})


class App extends React.Component {
  state={
    selectedSkills:[]
  }

  handleClick = ({ target }) => {
    // soooo nested deconstruct just stopped working here because....?
    const id = target.id
    const { selectedSkills } = this.state
    if (selectedSkills.indexOf(id) === -1){
      selectedSkills.push(id)
      this.setState(selectedSkills)
      console.log('added to selection')
    } else {
      console.log('already in selection')
    }
      
  }
  
  render() {
    const { classes } = this.props
    // const { basics, quote, bio, projects, resume, contact } = this.props
    return (
      <div className={classes.base}>

        <Typography 
          className={classes.banner}
          align='center'
          variant='display3'
        >
          Curiousity, Interest, Insight
        </Typography>
        <Typography
          className={classes.hello}
          align='center'
          variant='display2'
        >
          Hi friend! I'm Kyle Zucker.
        </Typography>
        <Typography
          className={classes.intro}
          align='center'
          variant='display1'
        >
          Code is one of my favorite tools, I'm fortunate to be able use it in my career
        </Typography>

        <img src={pic} alt='Kyle smiling' className={classes.mainPic} />

        <Paper className={classes.skills}>
          <Typography
            align='center'
            variant='title'
          >
            Skills I bring every day
          </Typography>

          <Chip
            id='javascript'
            avatar={<Avatar>JS</Avatar>}
            label="Javascript"
            onClick={this.handleClick}
            className={classes.chip}
          />
          <Chip
            avatar={<Avatar>Re</Avatar>}
            label="React"
            onClick={this.handleClick}
            className={classes.chip}
          />
          <Chip
            avatar={<Avatar>Rx</Avatar>}
            label="Redux"
            onClick={this.handleClick}
            className={classes.chip}
          />


          <Chip
            avatar={<Avatar>PY</Avatar>}
            label="Python"
            onClick={this.handleClick}
            className={classes.chip}
          />

          <Chip
            avatar={<Avatar>Dj</Avatar>}
            label="Django"
            onClick={this.handleClick}
            className={classes.chip}
          />

          <Chip
            avatar={<Avatar>ABC</Avatar>}
            label="HTML/CSS"
            onClick={this.handleClick}
            className={classes.chip}
          />
        </Paper>
      </div >





    )
  }
}

export default withStyles(styles)(App);
