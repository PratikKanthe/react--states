import React, { Component } from 'react'

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to the channel :)"
      }
    }
  render() {
    return (
      <div className='App'>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default NewComp