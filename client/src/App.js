import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import getDummyUsers from "./services/dummy-users";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    getDummyUsers().then(users =>
      this.setState({
        users
      })
    );
  }
  renderUser = user => {
    const { id, name } = user;
    return (
      <li key={id}>
        id: {id} name: {name}
      </li>
    );
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>{users.map(user => this.renderUser(user))}</ul>
      </div>
    );
  }
}

export default App;
