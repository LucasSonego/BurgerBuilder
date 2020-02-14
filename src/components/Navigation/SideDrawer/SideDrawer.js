import React from "react";

import { Container } from "./styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default function SideDrawer(props) {
  return (
    <>
      <Backdrop onClick={props.toggleSideDrawer} isVisible={props.isVisible} />
      <Container isVisible={props.isVisible}>
        <Logo size="80px" />
        <nav>
          <NavigationItems />
        </nav>
      </Container>
    </>
  );
}
