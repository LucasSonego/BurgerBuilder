import React from "react";

import { Container } from "./styles";
import Backdrop from "../Backdrop/Backdrop";

export default function Modal(props) {
  return (
    <>
      <Backdrop isVisible={props.isVisible} onClick={props.onClick} />
      <Container isVisible={props.isVisible}>{props.children}</Container>
    </>
  );
}
