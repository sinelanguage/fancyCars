import React from "react";
import { Grid, Card, Image, Button, Container } from "semantic-ui-react";

const renderAvailability = availability =>
  availability === "In Dealership" ? (
    <Button compact>Buy Now</Button>
  ) : (
    <span>Availability: {availability}</span>
  );

export default ({ car }) => {
  const { img, make, model, year, availability } = car;
  return (
    <Grid.Column>
      <Card>
        <Image src={require(`../../assets/images/cars/${img}`)} />
        <Card.Content>
          <Card.Header>
            {year} {make} {model}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Container textAlign="center">
            {renderAvailability(availability)}
          </Container>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
