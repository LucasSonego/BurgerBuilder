import React from "react";

import { Container } from "./styles";
import Backdrop from "../Backdrop/Backdrop";

export default function Modal(props) {
  return (
    <>
      <Backdrop show={props.visible} clicked={props.onClick} />
      <Container visible={props.visible ? "visible" : undefined}>
        {props.children}
      </Container>
    </>
  );
}
