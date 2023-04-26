import React from "react"; 
import './App.css';
import NewComp from "./Components/NewComp";

class App extends React.Component {
  styles={
    fontstyle: "bold",
    color: "#1d4ed8"
  }
 render() {
  return(
    <div className="App">
      <h1 style={this.styles}>React States</h1>
      <NewComp />
    </div>
  );
 }
}

export default App;
