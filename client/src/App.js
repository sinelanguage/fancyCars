import React, { Component } from "react";
import { connect } from "react-redux";
// import getDummyUsers from "./services/dummy-users";
import { fetchCars } from "./redux/actions/cars.thunk";
import logo from "./logo.svg";
import "./app.css";

class App extends Component {
  componentDidMount() {
    this.props.loadCars();
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
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
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

const mapDispatchToProps = dispatch => {
  return {
    loadCars: () => dispatch(fetchCars())
  };
};

const mapStateToProps = state => ({
  users: state.cars.inventory,
  loading: state.cars.loading,
  error: state.cars.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
