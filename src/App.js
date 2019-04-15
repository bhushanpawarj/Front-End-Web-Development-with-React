import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["todo1", "todo2", "todo3", "todo4"]
    };
  }

  delete(id) {
    this.setState(this.state.tasks.splice(id, 1));
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Bhushan's Indian Restaurant</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
