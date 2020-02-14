import React from "react";

import { Container } from "./styles";

export default function Backdrop(props) {
  return <>{props.isVisible ? <Container onClick={props.onClick} /> : null}</>;
}
