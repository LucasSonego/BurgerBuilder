import React from "react";

import { Item } from "./styles";

export default function NavigationItem(props) {
  return (
    <Item active={props.active}>
      <a href={props.link}>{props.children}</a>
    </Item>
  );
}
