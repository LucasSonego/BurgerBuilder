import React from "react";

import { Items } from "./styles";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <Items>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </Items>
  );
}
