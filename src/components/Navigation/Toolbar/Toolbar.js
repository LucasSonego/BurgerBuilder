import React from "react";

import { Header, HideOnMobile } from "./styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function Toolbar() {
  return (
    <Header>
      <div>Menu</div>
      <Logo size="80%" />
      <HideOnMobile>
        <NavigationItems />
      </HideOnMobile>
    </Header>
  );
}
