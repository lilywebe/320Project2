import React, { useState, useEffect, useRef } from "react";
import { Modal, Fade, Box } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
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
  const clickableArea = [];
  //this section generously donated by mui docs <3
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid ##d5c4b4',
    boxShadow: 24,
    p: 4,
  };
  //end mui doc section

  //get the new class when button clicked
function getClass(index){
  var cn = temp[props.curTraining.id][index] ? "clicked" : "";
  return cn;
}

  if (props.drinks.length > 0) {
    var temp = clicked;
    if (temp.length == 0) {
      for (const [drinkindex, drink] of props.drinks.entries()) {
        var drinkarray = [];
        for (const [stepindex, step] of drink.steps.entries()) {
          drinkarray = [...drinkarray, false];
        }
        temp = [...temp, drinkarray];
      }
      setClicked(temp);
    }

    //loop through positions for cur drink and map circles to those positions on the screen
    for (const [index, value] of props.curTraining.positions.entries()) {
      circles.push(<circle class= {getClass(index)} r="10" cx={value.x} cy={value.y} fill="#FFFFC9" stroke="black" strokeWidth="1" />)
      //add text on top of circles
      text.push(<text class={getClass(index)} x={value.x - 5} y={value.y + 5} fill="#FFFFC9" stroke="black" strokeWidth="1">{index + 1}</text>);
      //add clear circle on top of circle and text to make text clickable as well
      clickableArea.push(<circle  r="10" cx={value.x} cy={value.y} opacity="0" onClick={() => {
        //if the circle has already been clicked, do nothing
        if (temp[props.curTraining.id][index] == true) {

        }
        //otherwise, add to progress, set it to clicked, show the Modal that goes with it, use function to update array storing whether
        //all have been clicked or not
        else {

          props.setProgress(props.progress + 3.45);
          setCurInd(index);
          setShowModal(true);
          setClickArray(props.curTraining.id, index, clicked, setClicked);
        }
      }}/>)
    };

    

    return (
      //show image, circles, and text that correlate to the current drink
      <div>
        <div className="img-overlay-wrap">
          <img src={props.curTraining.imageurl} />
          <svg viewBox="0 0 200 200">
            {circles}
            {text}
            {clickableArea}
          </svg>
        </div>


        {/* modal that shows steps based on clicks on circles*/}
        <Modal
          open={showModal}
          onClose={() => {
            setShowModal(false);
            //if the last circle clicked was the last one the user needed to click,
            //set progress much higher than acheivable through clicks to signal to other component that the user is finished
            if (props.progress > 100) {
              props.setProgress(props.progress + 50);
            }
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}

        >
          <Fade in={showModal}>
            <Box sx={style}>
              <div>
                <h3>Step {curInd + 1} : </h3>
                <p>{props.curTraining.steps[curInd]}</p>
              </div>
            </Box>
          </Fade>
        </Modal>


      </div>


    )
  }
  return (<div></div>);
}

//update double array ([][]) based on itself and updates from the user clicking on buttons
function setClickArray(recipeindex, stepindex, clicked, setClicked) {
  var temp = [...clicked];
  temp[recipeindex][stepindex] = true;
  setClicked(temp);
}





