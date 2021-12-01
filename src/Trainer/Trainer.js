import React, { useState, useEffect, useRef } from "react";
import DrinkList from "./DrinkList";
import DrinkVis from "./DrinkVis";
import LearningProgress from "./LearningProgress";
import './styles.css';
export default function Trainer() {
  const [drinks, setDrinks] = useState([]);
  const [modalopen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [curTraining, setCurTraining] = useState({    "id": 0,
  "name": "Mocha",
  "ingredients": [
      "milk",
      "mocha sauce",
      "espresso"
  ],
  "steps:": [
      "Step 1",
      "Step 2",
      "Step 3",
      "Step 4"
  ],
  "positions":[
      {"x":20, "y":20}
  ],
  "difficultylevel": 0.5,
  "imageurl":"./imagesforproject2/mocha.png"

});

  useEffect(() => {
    fetch("data/drinks.json")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
      });
  }, []);

  return (
    <div id ="playfield">
      <div id="heading">
      Barista Trainer
      <div id="sub">
        Now Learning: {curTraining.name}
        </div>
      </div>
      <div id="stufftoflex">
      <DrinkList
        drinks={drinks}
        curTraining={curTraining}
        onSelected={(id) => {
          drinkSelected(id);
          
        }}
      />
      <DrinkVis
      drinks={drinks}
        curTraining={curTraining}
        onSelected={(id) => {
          drinkSelected(id);
        }} 
        modalopen={modalopen}
        setProgress={setProgress}
        progress={progress}
         />
         </div>
         <LearningProgress
         progress={progress}/>


    </div>
  );

  function drinkSelected(id) {
    //find that drink
    const foundDrink = drinks.find((drink) => drink.id == id);
    //set it as currently learning
    setCurTraining(foundDrink);

  }
}