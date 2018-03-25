import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default () => {
  return (
    <Menu fixed="top" inverted>
      <Container fluid>
        <Menu.Item as="h1" header>
          FancyCars.ca
        </Menu.Item>
      </Container>
    </Menu>
  );
};
