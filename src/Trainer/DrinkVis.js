import React, { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './styles.css';

export default function DrinkVis(props) {
  const [showModal, setShowModal] = useState(props.modalopen);
  const [curInd, setCurInd] = useState(0);
  const [clicked, setClicked] = useState([]);
  const circles = [];
  const text = [];

  if(props.drinks.length > 0){
  var temp = clicked;
  if(temp.length == 0){
    for (const [drinkindex, drink] of props.drinks.entries()) {
      var drinkarray = [];
      for (const [stepindex, step] of drink.steps.entries()) {
      drinkarray = [...drinkarray, false];
    }
    temp = [...temp, drinkarray];
  }
    setClicked(temp);
  }

  for (const [index, value] of props.curTraining.positions.entries()) {
    console.log(temp);
    circles.push(<circle className={temp[props.curTraining.id][index] ? "clicked" : "unclicked"} r="10" cx={props.curTraining["positions"][index].x} cy={props.curTraining["positions"][index].y} fill="#FFFFC9" stroke="black" strokeWidth="1"  onClick={() => {
      if(temp[props.curTraining.id][index]==true){
      }
      else{
      props.setProgress(props.progress+3.45);
      setCurInd(index);
      setShowModal(true);
      setClickArray(props.curTraining.id, index, clicked, setClicked);
      }
    }}/>
    )};

    for (const [index, value] of props.curTraining.positions.entries()) {
      text.push(<text x={props.curTraining["positions"][index].x-5} y={props.curTraining["positions"][index].y+5} fill="#FFFFC9" stroke="black" strokeWidth="1">{index+1}</text>
      )};

  return (<div>
    <div className="img-overlay-wrap">
    <CSSTransition
       key={props.curTraining.id}
       timeout={500}
       classNames="item"
       in="true"
      >
      <img src={props.curTraining.imageurl} />
      </CSSTransition>
      <svg viewBox="0 0 200 200">
        {circles}
        {text}
        
      </svg>
    </div>
    
    
    
    <Modal
      open={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <div id="infoBox">
        <h3>Step {curInd+1} : </h3>
        <p>{props.curTraining.steps[curInd]}</p>
      </div>
    </Modal>
  
  </div>


  )
    }
    return (<div></div>);
}

function setClickArray(recipeindex, stepindex,  clicked, setClicked){
  var temp = [...clicked];
  temp[recipeindex][stepindex] = true;
  setClicked(temp);
}



