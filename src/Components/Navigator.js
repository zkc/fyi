import React, { Component } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  width: 600px;
  height: 300px;
  border: solid black 1px;
`

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
      <Navigation>
        I get a round
      </Navigation>
    )
  }
}

export default Navigator