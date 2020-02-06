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
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

export default function BurgerBuilder() {
  const salad = {
    render: key => <Salad key={key} />,
    label: "Salad",
    price: 0.5
  };
  const bacon = {
    render: key => <Bacon key={key} />,
    label: "Bacon",
    price: 1
  };
  const cheese = {
    render: key => <Cheese key={key} />,
    label: "Cheese",
    price: 0.5
  };
  const meat = {
    render: key => <Meat key={key} />,
    label: "Meat",
    price: 1.5
  };

  const [ingredients, setIngredients] = useState([salad, cheese, bacon, meat]);

  const availableIngredients = [salad, bacon, cheese, meat];

  const [modalState, setModalState] = useState(false);

  function toggleModal() {
    setModalState(!modalState);
  }

  function createBuildControl(ingredient) {
    return (
      <BuildControl
        label={ingredient.label}
        add={() => addIngredient(ingredient)}
        remove={() => removeIngredient(ingredient)}
        key={ingredient.label}
      />
    );
  }

  function addIngredient(ingredient) {
    setIngredients([ingredient, ...ingredients]);
  }

  function removeIngredient(ingredient) {
    let i = ingredients.length - 1;
    let found = -1;

    while (i >= 0) {
      if (ingredients[i].label === ingredient.label) {
        found = i;
      }
      i--;
    }

    let newIngredients = [...ingredients];

    if (found >= 0) {
      newIngredients.splice(found, 1);
    }

    setIngredients([...newIngredients]);
  }

  function burgerHasIgredients() {
    return !ingredients.length > 0;
  }

  function getTotalPrice() {
    let price = 4;
    ingredients.map(i => (price += i.price));
    return price;
  }

  return (
    <>
      <Modal visible={modalState} onClick={() => toggleModal()}>
        <OrderSummary
          ingredients={ingredients}
          available={availableIngredients}
          price={getTotalPrice()}
          cancel={() => toggleModal()}
          // continue={}
        />
      </Modal>
      <Container>
        <Controls>
          <div>
            <OrderButton
              disabled={burgerHasIgredients()}
              onClick={() => toggleModal()}
            >
              Order Now
            </OrderButton>
            <Price disabled={burgerHasIgredients()}>
              {"Price: $" + getTotalPrice()}
            </Price>
          </div>
          {availableIngredients.map(i => createBuildControl(i))}
        </Controls>
        <Burger ingredients={ingredients} />
      </Container>
    </>
  );
}
