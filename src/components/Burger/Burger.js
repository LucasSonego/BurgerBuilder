import React from "react";

import { BurgerDiv } from "./styles";
import {
  BreadTop,
  BreadBottom,
  Seeds1,
  Seeds2
} from "./BurgerIngredient/BurgerIngredient";

export default function Burger(props) {
  return (
    <BurgerDiv>
      <BreadTop>
        <Seeds1 />
        <Seeds2 />
      </BreadTop>
      {props.ingredients.map((ing, key) => ing.render(key))}
      <BreadBottom />
    </BurgerDiv>
  );
}
