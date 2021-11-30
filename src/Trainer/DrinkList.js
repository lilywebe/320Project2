import React, { useState, useEffect, useRef } from "react";

export default function DrinkList(props) {
  let drinksEls = props.drinks.map((drink) => (
    <div
      key={drink.id}
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
