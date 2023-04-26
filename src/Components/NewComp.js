import React, { Component } from 'react'
import bellA from "./BellA.png"
// import bellB from "./bellB.png"

class NewComp extends Component {
    styles={
        fontstyle: "italic",
        color: "#4c1d95"
      }
      ButtonChange = () =>{
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
      }
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Please subscribe to the channel :)",
         sub: "Subscribe",
         imageURL: bellA
      }
    }
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>{this.state.message}</h1>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <img src={this.state.imageURL}  alt=''/>
      </div>
    )
  }
}

export default NewComp