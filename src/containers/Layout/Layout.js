import React, { useState } from "react";

import { Main } from "./styles";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

export default function Layout(props) {
  const [sideDrawerState, setSideDrawerState] = useState(false);

  function toggleSideDrawer() {
    setSideDrawerState(!sideDrawerState);
  }

  return (
    <>
      <Toolbar toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer
        isVisible={sideDrawerState}
        toggleSideDrawer={toggleSideDrawer}
      />
      <Main>{props.children}</Main>
    </>
  );
}
