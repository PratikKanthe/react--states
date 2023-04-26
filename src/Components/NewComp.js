import React, { Component } from 'react'

class NewComp extends Component {
    styles={
        fontstyle: "italic",
        color: "#4c1d95"
      }
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Please subscribe to the channel :)"
      }
    }
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>{this.state.message}</h1>
      </div>
    )
  }
}

export default NewComp