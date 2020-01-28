import React from "react";

import { Container, AddButton, RemoveButton, Label } from "./styles";

const BuildControl = props => (
  <Container>
    <Label>{props.label}</Label>
    <div>
      <AddButton onClick={props.add}>More</AddButton>
      <RemoveButton onClick={props.remove}>Less</RemoveButton>
    </div>
  </Container>
);

export default BuildControl;
