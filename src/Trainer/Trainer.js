import React, { useState, useEffect, useRef } from "react";
import Completion from "./Completion";
import DrinkList from "./DrinkList";
import DrinkVis from "./DrinkVis";
import LearningProgress from "./LearningProgress";
import './styles.css';
export default function Trainer() {
  const [drinks, setDrinks] = useState([]);
  const [modalopen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showImage,setShowImage] = useState(true);
  const [curTraining, setCurTraining] = useState({    "id": 0,
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
  
  "positions":[{"x":35, "y":15}, {"x":35, "y":45}, {"x":35, "y":75}, {"x":35, "y":105}],
  
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
        showImage={showImage}
         />
         </div>
         <LearningProgress
         progress={progress}/>
        <Completion
        progress={progress}/>

    </div>
  );

  function drinkSelected(id) {
    //find that drink
    const foundDrink = drinks.find((drink) => drink.id == id);
    //set it as currently learning
    setCurTraining(foundDrink);
    //set show image equal to true
    setShowImage(true);

  }
}