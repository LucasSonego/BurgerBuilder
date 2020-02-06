import React from "react";

import { Container, Title, StyledH3, IngredientList } from "./styles";
import Button from "../../UI/Button/Button";

export default function OrderSummary(props) {
  function getIngredientAmmount() {
    let ingredientAmmount = props.available.map(ingredient => {
      let ammount = 0;
      for (let index = 0; index < props.ingredients.length; index++) {
        if (props.ingredients[index].label === ingredient.label) {
          ammount++;
        }
      }
      return ammount;
    });

    return ingredientAmmount;
  }

  function createIngredientList() {
    const ingredientAmmount = getIngredientAmmount();

    return (
      <IngredientList>
        {props.available.map((ingredient, index) => {
          if (ingredientAmmount[index] > 0) {
            return (
              <li key={index}>
                {ingredient.label + ": " + ingredientAmmount[index]}
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
      <StyledH3>Total Price: ${props.price}</StyledH3>
      <Button color={"#e74c3c"} onClick={props.cancel}>
        CANCEL
      </Button>
      <Button color={"#27ae60"} onClick={props.continue}>
        CONTINUE
      </Button>
    </Container>
  );
}
