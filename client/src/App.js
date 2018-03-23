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
  renderUser = car => {
    const { id, name, availability } = car;
    return (
      <li key={id}>
        id: {id} name: {name} availability: {availability}
      </li>
    );
  };
  render() {
    const { error, loading, cars } = this.props;

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
        <ul>{cars.map(car => this.renderUser(car))}</ul>
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
  cars: state.cars.inventory,
  loading: state.cars.loading,
  error: state.cars.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
