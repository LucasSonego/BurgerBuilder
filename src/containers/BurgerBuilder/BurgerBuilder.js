import React, { useState } from "react";

import { Container, Controls } from "./styles";

import Burger from "../../components/Burger/Burger";
import {
  Bacon,
  Cheese,
  Salad,
  Meat
} from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import BuildControl from "../../components/Burger/BuildControl/BuildControl";

export default function BurgerBuilder() {
  const salad = key => <Salad key={key} />;
  const bacon = key => <Bacon key={key} />;
  const cheese = key => <Cheese key={key} />;
  const meat = key => <Meat key={key} />;

  const [ingredients, setIngredients] = useState({
    list: [meat, salad, cheese, bacon]
  });

  function addIngredient(ingredient) {
    setIngredients({
      list: [ingredient, ...ingredients.list]
    });
  }

  function removeIngredient(ingredient) {
    let i = ingredients.list.length - 1;
    let found = -1;

    while (i >= 0) {
      if (ingredients.list[i].name === ingredient.name) {
        found = i;
      }
      i--;
    }

    let newIngredients = [...ingredients.list];

    if (found >= 0) {
      newIngredients.splice(found, 1);
    }

    setIngredients({
      list: [...newIngredients]
    });
  }

  return (
    <Container>
      <Controls>
        <BuildControl
          label="Salad"
          add={() => addIngredient(salad)}
          remove={() => removeIngredient(salad)}
        />
        <BuildControl
          label="Cheese"
          add={() => addIngredient(cheese)}
          remove={() => removeIngredient(cheese)}
        />
        <BuildControl
          label="Bacon"
          add={() => addIngredient(bacon)}
          remove={() => removeIngredient(bacon)}
        />
        <BuildControl
          label="Meat"
          add={() => addIngredient(meat)}
          remove={() => removeIngredient(meat)}
        />
      </Controls>
      <Burger ingredients={ingredients.list} />
    </Container>
  );
}
