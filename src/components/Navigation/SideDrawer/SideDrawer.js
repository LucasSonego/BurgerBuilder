import React from "react";

import { Container } from "./styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function SideDrawer() {
  return (
    <Container>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </Container>
  );
}
