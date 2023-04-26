import React from "react"; 
import './App.css';

class App extends React.Component {
  styles={
    fontstyle: "bold",
    color: "#1d4ed8"
  }
 render() {
  return(
    <div className="App">
      <h1 style={this.styles}>React States</h1>
    </div>
  );
 }
}

export default App;
