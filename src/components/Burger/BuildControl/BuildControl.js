import React from "react";

import { Container, Label, ControlButton } from "./styles";

const BuildControl = props => (
  <Container>
    <Label>{props.label}</Label>
    <div>
      <ControlButton
        background="linear-gradient(120deg, #ffda79, #ffb142)"
        onClick={props.add}
      >
        More
      </ControlButton>
      <ControlButton
        background="linear-gradient(120deg, #ffb142, #ff793f)"
        onClick={props.remove}
      >
        Less
      </ControlButton>
    </div>
  </Container>
);

export default BuildControl;
