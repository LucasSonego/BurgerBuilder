import React, { useState } from "react";

import { Main } from "./styles";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

export default function Layout(props) {
  const [sideDrawerState, setSideDrawerState] = useState(false);

  function toggleSideDrawer() {
    setSideDrawerState(!sideDrawerState);
  }

  return (
    <>
      <Toolbar toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer open={sideDrawerState} toggleSideDrawer={toggleSideDrawer} />
      <Main>{props.children}</Main>
    </>
  );
}
