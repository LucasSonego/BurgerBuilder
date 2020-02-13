import React from "react";
import { FiMenu } from "react-icons/fi";

import { Header, HideOnMobile, MobileOnly, MenuButton } from "./styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function Toolbar(props) {
  return (
    <Header>
      <MobileOnly>
        <MenuButton onClick={() => props.toggleSideDrawer()}>
          <FiMenu />
        </MenuButton>
      </MobileOnly>
      <Logo size="80%" />
      <HideOnMobile>
        <NavigationItems />
      </HideOnMobile>
    </Header>
  );
}
