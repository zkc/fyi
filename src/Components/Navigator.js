import React, { Component } from 'react'

class Navigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      is_open: false,
      touch: false, 
      clickOk: false,
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      this.setState({is_open: false})
    })
  }

  render() {


    return (
      <div className="navigator"
        onTouchStart={(e) => {
          console.log('touch start', e, this.state)
          if (this.state.is_open) {
            console.log('is open')
            this.setState({clickOk: true})
          } else {

            e.stopPropagation()  
          }
          this.setState({is_open: true,  touch: true})
        }}
        onTouchEnd={(e) => {
          console.log('touch end', e)
          // this.setState({is_open: false, touch:false})
        }}
        onClick={(e) => {
          if (this.state.touch) {
            if (this.state.clickOk) {
              console.log('stop the click')
              this.setState({clickOk: false})
            } else {
              e.preventDefault()
  
            }
          }
          console.log('click', e)
          // if it's just been touched, don't click the thing. Else, click the thing

        }}
        onMouseEnter={(e) => {
          if (!this.state.touch) {
            console.log('mouse enter', e)
            this.setState({is_open: true})

          } 

        }} 
        onMouseLeave={(e) => {
          if (!this.state.touch) {
            console.log('mouse leave', e)  
          
            this.setState({is_open: false})

          }
                  
        }}
        >
        {this.state.is_open ? 
          <ul className="full-menu">
            <li><a href="#top">Top</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>...</li>
          </ul> 
          :
          <div className="closed-menu" />
        }
        
      </div>
    )
  }
}

export default Navigator