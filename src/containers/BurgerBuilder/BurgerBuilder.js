import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import {
  Bacon,
  Cheese,
  Salad,
  Meat
} from "../../components/Burger/BurgerIngredient/BurgerIngredient";

export default function BurgerBuilder() {
  const salad = () => <Salad />;
  const bacon = () => <Bacon />;
  const cheese = () => <Cheese />;
  const meat = () => <Meat />;

  const [ingredients, setIngredients] = useState({
    list: [bacon, cheese, bacon]
  });

  function test() {
    setIngredients({
      list: [...ingredients.list, salad, cheese, bacon, meat]
    });
  }

  return (
    <>
      <Burger ingredients={ingredients.list} />
      <div>
        BuildControls
        <button onClick={() => test()}>TEST</button>
      </div>
    </>
  );
}
