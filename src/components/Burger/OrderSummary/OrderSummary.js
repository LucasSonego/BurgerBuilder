import React from "react";

import { Container, Title, StyledH3, IngredientList } from "./styles";

export default function OrderSummary(props) {
  function getIngredientAmmount() {
    let ingredientAmmount = props.available.map(ingredient => {
      let ammount = 0;
      for (let index = 0; index < props.ingredients.length; index++) {
        if (props.ingredients[index].name === ingredient.name) {
          ammount++;
        }
      }
      return ammount;
    });

    return ingredientAmmount;
  }

  function formattedName(ingredient) {
    return ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);
  }

  function createIngredientList() {
    const ingredientAmmount = getIngredientAmmount();

    return (
      <IngredientList>
        {props.available.map((ingredient, index) => {
          if (ingredientAmmount[index] > 0) {
            return (
              <li key={index}>
                {formattedName(ingredient) + ": " + ingredientAmmount[index]}
              </li>
            );
          }
          return undefined;
        })}
      </IngredientList>
    );
  }

  return (
    <Container>
      <Title>Your Order</Title>
      <StyledH3>A delicious burger with the following ingredients:</StyledH3>
      {createIngredientList()}
      <StyledH3>Total Price: ${4 + props.ingredients.length * 2}</StyledH3>
    </Container>
  );
}
