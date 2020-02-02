import React from "react";

import { StyledButton } from "./styles";

export default function Button(props) {
  return (
    <StyledButton onClick={props.onClick} color={props.color}>
      {props.children}
    </StyledButton>
  );
}
