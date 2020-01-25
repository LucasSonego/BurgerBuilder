import React from "react";

import { BurgerDiv } from "./styles";
import { BreadTop, BreadBottom } from "./BurgerIngredient/BurgerIngredient";

export default function Burger(props) {
  return (
    <BurgerDiv>
      <BreadTop />
      {props.ingredients.map(ing => ing())}
      <BreadBottom />
    </BurgerDiv>
  );
}
