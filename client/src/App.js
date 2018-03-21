import React, { Component } from "react";
import logo from "./logo.svg";
import "./app.css";
import getDummyUsers from "./services/dummy-users";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    // getDummyUsers service uses the fetch api which returns a promise by default,
    // exceptions are handled in the service.
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
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <ul>{users.map(user => this.renderUser(user))}</ul>
      </div>
    );
  }
}

export default App;
