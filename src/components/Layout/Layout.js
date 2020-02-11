import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import { Main } from "./styles";

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <Main>{props.children}</Main>
    </>
  );
}
