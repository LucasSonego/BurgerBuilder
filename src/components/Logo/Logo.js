import React from "react";

import { Container, Img } from "./styles";
import logo from "../../assets/images/burger-logo.png";

export default function Logo() {
  return (
    <Container>
      <Img src={logo} alt="" />
    </Container>
  );
}
