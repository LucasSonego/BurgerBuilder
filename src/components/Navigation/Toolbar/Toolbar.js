import React from "react";

import { Header } from "./styles";
import Logo from "../../Logo/Logo";

export default function Toolbar(props) {
  return (
    <Header>
      <div>Menu</div>
      <Logo />
      <div>...</div>
    </Header>
  );
}
