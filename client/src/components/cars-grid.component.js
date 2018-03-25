import React from "react";
import { Grid, Container } from "semantic-ui-react";
import CardComponent from "../components/card.component";

export default ({ cars }) => {
  return (
    <Container>
      <Grid doubling columns={3}>
        {cars && cars.map(car => <CardComponent key={car.id} car={car} />)}
      </Grid>
    </Container>
  );
};
