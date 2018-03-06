import React, { Component } from 'react';

// import Navigator from './Navigator'
import Resume from './Resume'
import Contact from './Contact'
import Project from './Project'
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
      mode: "in dev"
    }

    // console.log(document.styleSheets)
    // load in :root class, change sheet with state. could be own piece 

  }

  render() {
    const { basics, quote, bio, projects, resume, contact } = this.props
    return (
      <div className="main-page" >
        {/* <Navigator mode={this.state.mode} /> */}
        <div className="ls" />
        <div className="rs" />
        
        <header id="top" className="header"> 
          <h1>{basics.name}</h1>
          <h2>{basics.title}</h2>
          <div className="bar" />
        </header>

        <section className="quote">
          <h3>"{quote.words_first_half}</h3>
          <h3>{quote.words_second_half}"</h3>          
          <h4>- {quote.speaker}</h4>
        </section>

        <section className="bio">
          {bio} 
        </section>

        <section className="projects">
        {
          projects.map(p => <Project {...p} key={p.title}/>)
        }
        </section>

        <Resume {...resume} mode={this.state.mode} />
        <Contact {...contact} />
      </div>
    )
  }
}

export default App;
