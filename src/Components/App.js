import React, { Component } from 'react';
import styled from 'styled-components'

import Navigator from './Navigator'
// import Resume from './Resume'
// import Contact from './Contact'
// import Project from './Project'

const Site = styled.div`
  display: grid;

  position: relative;
  grid-template-areas: 
    "ls header rs"  
    "ls quote rs"
    "ls bio rs"
    "ls projects rs"
    "ls resume rs"
    "ls contact rs"
  ;
  grid-template-columns: 1fr 87vw 1fr;
  grid-auto-rows: max-content;

  justify-items: center;
`



class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      mode: "in dev"
    }

  }

  render() {
    const { basics, quote, bio, projects, resume, contact } = this.props
    return (
      <Site>
        <Navigator />
        Hello!
      </Site>
    )
  }
}

export default App;
