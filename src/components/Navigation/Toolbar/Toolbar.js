import React from "react";

import { Header } from "./styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function Toolbar() {
  return (
    <Header>
      <div>Menu</div>
      <Logo />
      <NavigationItems />
    </Header>
  );
}
