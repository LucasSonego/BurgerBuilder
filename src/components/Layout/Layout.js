import React from "react";

import { Main } from "./styles";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <SideDrawer open="true" />
      <Main>{props.children}</Main>
    </>
  );
}
