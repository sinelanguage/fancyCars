import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import {
  sortCarsAlphabetically,
  sortCarsByAvailability,
  sortCarsDefault
} from "../redux/actions/cars.actions";

class SortingMenuComponent extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    switch (name) {
      case "default":
        return this.props.sortCarsDefault();
      case "make":
        return this.props.sortCarsAlphabetically();
      case "availability":
        return this.props.sortCarsByAvailability();
      default:
        return;
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu fixed="top" style={{ marginTop: "5.65em" }}>
        <Menu.Item
          name="default"
          active={activeItem === "default"}
          onClick={this.handleItemClick}
        >
          Default Sort
        </Menu.Item>

        <Menu.Item
          name="make"
          active={activeItem === "make"}
          onClick={this.handleItemClick}
        >
          Sort By Make
        </Menu.Item>

        <Menu.Item
          name="availability"
          active={activeItem === "availability"}
          onClick={this.handleItemClick}
        >
          Sort By Availability
        </Menu.Item>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortCarsAlphabetically: () => dispatch(sortCarsAlphabetically()),
    sortCarsByAvailability: () => dispatch(sortCarsByAvailability()),
    sortCarsDefault: () => dispatch(sortCarsDefault())
  };
};

export default connect(undefined, mapDispatchToProps)(SortingMenuComponent);
