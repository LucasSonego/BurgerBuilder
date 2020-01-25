import React from "react";

import { BurgerDiv } from "./styles";
import {
  BreadTop,
  Seeds1,
  Seeds2,
  Salad,
  Cheese,
  Bacon,
  Meat,
  BreadBottom
} from "./BurgerIngredient/BurgerIngredient";

export default function Burger(props) {
  return (
    <BurgerDiv>
      <BreadTop>
        {props.seeds && (
          <>
            <Seeds1 />
            <Seeds2 />
          </>
        )}
      </BreadTop>
      {props.salad && <Salad />}
      {props.cheese && <Cheese />}
      {props.bacon && <Bacon />}
      {props.meat && <Meat />}
      <BreadBottom />
    </BurgerDiv>
  );
}
