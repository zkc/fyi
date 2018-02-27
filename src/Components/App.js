import React, { Component } from 'react';

import Navigator from './Navigator'
import Resume from './Resume'
import Contact from './Contact'
import '../Style/App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.display_modes = [
      "designer_mode", // swap css to something more colorful, with animations!
      "dev_mode", //show raw json ? drag and drop lol?
      "good_website_mode", //just plain text, less spacing
      "honesty_mode", /// tell the long truth. expand on bio
      "game_mode", /// hide logos of web tech and give point for findng/clicking on them.
    ]


    this.state = {
      mode: "na"
    }

    // console.log(document.styleSheets)
    // load in :root class, change sheet with state. could be own piece 

  }

  render() {
    return (
      <div className="main-page" >
        <Navigator mode={this.state.mode} />
        <div className="ls" />
        <div className="rs" />
        
        <header id="top" className="header"> 
          <h1>{this.props.basics.name}</h1>
          <h2>{this.props.basics.title}</h2>
          <div className="bar" />
        </header>
        <section className="quote">
          <h3>"{this.props.quote.words_first_half}</h3>
          <h3>{this.props.quote.words_second_half}"</h3>          
          <h4>- {this.props.quote.speaker}</h4>
        </section>
        <section className="bio">
          {this.props.bio} 
        </section>

        <section className="projects">
          <div className="intro">
            <span style={{ fontStyle: 'italic', fontSize: '2em'  }}>FlowReader</span>-- Read faster with this novel technique. I built this applet to help myself increase speed and comprehension. Plus I'm curious, how fast can one read?
          </div>
          <iframe src="https://zkc.github.io/flow-word/" frameborder="0" width="100%" height="100%" />
        </section>

        <Resume {...this.props.resume} mode={this.state.mode} />
        <Contact {...this.props.contact} />
      </div>
    )
  }
}

export default App;
