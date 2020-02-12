import React from "react";

import { Container } from "./styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function SideDrawer() {
  return (
    <Container>
      <Logo size="80px" />
      <nav>
        <NavigationItems />
      </nav>
    </Container>
  );
}
