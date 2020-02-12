import React from "react";

import { Container, Img } from "./styles";
import logo from "../../assets/images/burger-logo.png";

export default function Logo(props) {
  return (
    <Container size={props.size}>
      <Img src={logo} alt="" />
    </Container>
  );
}
