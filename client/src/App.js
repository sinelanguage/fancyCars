import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCars } from "./redux/actions/cars.thunk";
import HomePageComponent from "./pages/homepage.component";
import logo from "./logo.svg";
import "./app.css";
import {
  sortCarsAlphabetically,
  sortCarsByAvailability,
  sortCarsDefault
} from "./redux/actions/cars.actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  renderCar = car => {
    const { id, img, make, model, year, availability } = car;
    return (
      <li key={id}>
        id: {id} image: {img} make: {make} model: {model} year: {year}{" "}
        availability: {availability}
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
        <HomePageComponent />
        <button onClick={() => this.props.sortCarsAphabetically()}>
          Sort by Name
        </button>
        <button onClick={() => this.props.sortCarsByAvailability()}>
          Sort by Availability
        </button>
        <button onClick={() => this.props.sortCarsDefault()}>
          Sort by Default Settings
        </button>
        <ul>{cars.map(car => this.renderCar(car))}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars()),
    sortCarsAphabetically: () => dispatch(sortCarsAlphabetically()),
    sortCarsByAvailability: () => dispatch(sortCarsByAvailability()),
    sortCarsDefault: () => dispatch(sortCarsDefault())
  };
};

const mapStateToProps = state => ({
  cars: state.cars.inventory,
  loading: state.cars.loading,
  error: state.cars.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
