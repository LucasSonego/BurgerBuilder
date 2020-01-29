import React, { useState } from "react";

import { Container, Controls, OrderButton, Price } from "./styles";

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

  const availableIngredients = [salad, bacon, cheese, meat];

  function renderBuildControl(ingredient) {
    const ingredientLabel =
      ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);

    return (
      <BuildControl
        label={ingredientLabel}
        add={() => addIngredient(ingredient)}
        remove={() => removeIngredient(ingredient)}
        key={ingredient.name}
      />
    );
  }

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

  function burgerHasIgredients() {
    return !ingredients.list.length > 0;
  }

  return (
    <Container>
      <Controls>
        <div>
          <OrderButton disabled={burgerHasIgredients()}>Order</OrderButton>
          <Price disabled={burgerHasIgredients()}>
            {"Price: $" + (4 + ingredients.list.length * 2)}
          </Price>
        </div>
        {availableIngredients.map(i => renderBuildControl(i))}
      </Controls>
      <Burger ingredients={ingredients.list} />
    </Container>
  );
}
