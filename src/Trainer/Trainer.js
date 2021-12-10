import React, { useState, useEffect, useRef } from "react";
import Completion from "./Completion";
import DrinkList from "./DrinkList";
import DrinkVis from "./DrinkVis";
import LearningProgress from "./LearningProgress";
import './styles.css';
export default function Trainer() {
  //initialize all state variables
  const [drinks, setDrinks] = useState([]);
  const [modalopen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  //here so that react doesn't yell about the user not having selected something on load
  const [curTraining, setCurTraining] = useState({
    "id": 0,
    "name": "Mocha",
    "ingredients": [
      "milk",
      "mocha sauce",
      "espresso"
    ],
    "steps": [
      "Brew an espresso into a mug, cup or glass.",
      "Add two teaspoons of hot chocolate mix or cocoa powder and mix with the espresso.",
      "Foam and texture the required quantity of milk, ensuring we have a good quality foam.",
      "Add the milk to the cup containing the chocolate espresso and top with whipped cream."
    ],

    "positions": [{ "x": 35, "y": 15 }, { "x": 35, "y": 45 }, { "x": 35, "y": 75 }, { "x": 35, "y": 105 }],
    "imageurl": "./imagesforproject2/mocha.png"

  });

  //get all data from JSON file
  useEffect(() => {
    fetch("data/drinks.json")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
      });
  }, []);

  return (
    //heading and now training display, list of drinks with selected drink highlighted
    <div id="playfield">
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
        {/* Drink Visualizations inclusing circles, images, and modal  */}
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
      {/* Progress bar at bottom of screen */}
      <LearningProgress
        progress={progress} />
      {/* Screen that shows the user that they've clicked through all drink steps and refreshes screen
         To test without actually doing that, change the value of progress to start at 100 and click a step */}
      <Completion
        progress={progress}
        setProgress={setProgress} />

    </div>
  );

  //function so generously donated by one of the labs we did in class
  //finds the drink matching the button the user picked and sets it to be currently training
  function drinkSelected(id) {
    //find that drink
    const foundDrink = drinks.find((drink) => drink.id == id);
    //set it as currently learning
    setCurTraining(foundDrink);


  }
}