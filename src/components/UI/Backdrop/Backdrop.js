import React from "react";

import { Container } from "./styles";

export default function Backdrop(props) {
  return <>{props.show ? <Container onClick={props.clicked} /> : null}</>;
}
