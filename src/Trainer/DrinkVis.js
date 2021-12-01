import React, { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";

export default function DrinkVis(props) {
  const [showModal, setShowModal] = useState(props.modalopen);
  const [clicked, setClicked] = useState(false);
  const circles = [];
  const text = [];
  const steps = [];
  for (const [index, value] of props.curTraining.positions.entries()) {
    circles.push(<circle className={clicked ? "clicked" : "unclicked"} r="10" cx={props.curTraining["positions"][index].x} cy={props.curTraining["positions"][index].y} fill="#FFFFC9" stroke="black" strokeWidth="1"  onClick={() => {
      props.setProgress(props.progress+5);
      console.log(props.progress);
      setClicked(true);
    }}/>
    )};


    for (const [index, value] of props.curTraining.positions.entries()) {
      text.push(<text x={props.curTraining["positions"][index].x-5} y={props.curTraining["positions"][index].y+5} fill="#FFFFC9" stroke="black" strokeWidth="1"  onClick={() => {
        props.setProgress(props.progress+5);
        console.log(props.progress);
        setClicked(true);
      }}>{index+1}</text>
      )};
  
{/*}
  console.log(props.curTraining);
  for (const [index, value] of props.curTraining["steps:"].entries()) {

    steps.push(<Modal open={showModal} onClose={() => {
      setShowModal(false);
    }} > <div id="infoBox"><h3>Step {index}</h3> <p>{props.curTraining["steps:"][index]}</p> </div></Modal>)

  }
*/}

  return (<div>
    <div className="img-overlay-wrap">
      <img src={props.curTraining.imageurl} />
      <svg viewBox="0 0 200 200"
        onClick={() => {
          setShowModal(true);
        }}>
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
        <h3>{props.curTraining.name}</h3>
        <p>{props.curTraining.ingredients}</p>
      </div>
    </Modal>
  
  </div>


  )

}