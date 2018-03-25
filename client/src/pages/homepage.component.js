import React, { Component } from "react";
import NavbarComponent from "../components/navbar.component";
import SortingMenuComponent from "../components/sorting-menu.component";
import CarGridComponent from "../components/cars-grid.component";

export default class HomePageComponent extends Component {
  render() {
    const { cars } = this.props;
    return (
      <div>
        <NavbarComponent />
        <SortingMenuComponent />
        <CarGridComponent cars={cars} />
      </div>
    );
  }
}
