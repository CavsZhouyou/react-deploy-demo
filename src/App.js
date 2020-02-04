import React, { PureComponent } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends PureComponent {
  state = {
    title: ""
  };

  componentDidMount() {
    const self = this;
    axios.get("/api/test").then(function(response) {
      console.log(response);

      self.setState({
        title: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-link">{this.state.title}</span>
        </header>
      </div>
    );
  }
}

export default App;
