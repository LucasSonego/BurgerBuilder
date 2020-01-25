import React from "react";
import Burger from "../../components/Burger/Burger";

export default function BurgerBuilder() {
  return (
    <>
      <Burger
        salad={false}
        cheese={true}
        bacon={true}
        meat={true}
        seeds={true}
      />
      <div>BuildControls</div>
    </>
  );
}
