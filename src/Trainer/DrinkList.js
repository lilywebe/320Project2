import React, { useState, useEffect, useRef } from "react";

export default function DrinkList(props) {

  //map drinks to left side list of drinks
  let drinksEls = props.drinks.map((drink) => (
    <div
      key={drink.id}
      // set class name based on whether the drink is the currently selected drink
      className={props.curTraining.id == drink.id ? "active" : "inactive"}
      onClick={() => {
        props.onSelected(drink.id);
      }}
    >
      {drink.name}
    </div>
  ));

  return <div>{drinksEls}</div>;
}
