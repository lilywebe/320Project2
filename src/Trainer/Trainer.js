import React, { useState, useEffect, useRef } from "react";
import DrinkList from "./DrinkList";
import DrinkVis from "./DrinkVis";
export default function Trainer() {
  const [drinks, setDrinks] = useState([]);
  const [curTraining, setCurTraining] = useState({});

  useEffect(() => {
    fetch("data/drinks.json")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
      });
  }, []);

  return (
    <div>
      Barista Trainer
      <div>
        Now Learning: {curTraining.name}
      </div>
      <DrinkList
        drinks={drinks}
        curTraining={curTraining}
        onSelected={(id) => {
          drinkSelected(id);
        }}
      />
      <img src={curTraining.imageurl}/>
    </div>
  );

  function drinkSelected(id) {
    //find that drink
    const foundDrink = drinks.find((drink) => drink.id == id);
    //set it as currently learning
    setCurTraining(foundDrink);
    <DrinkVis
      drinks={drinks}
        curTraining={curTraining}
        onSelected={(id) => {
          drinkSelected(id);
        }} />
  }
}