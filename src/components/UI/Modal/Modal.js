import React from "react";

import { Container } from "./styles";

export default function Modal(props) {
  return (
    <Container visible={props.visible ? "visible" : undefined}>
      {props.children}
    </Container>
  );
}
