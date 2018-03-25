import React, { Component } from "react";
import NavbarComponent from "../components/navbar.component";
import SortingMenuComponent from "../components/sorting-menu.component";

export default class HomePageComponent extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <SortingMenuComponent />
      </div>
    );
  }
}
