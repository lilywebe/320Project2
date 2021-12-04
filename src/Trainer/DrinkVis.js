import React, { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";

export default function DrinkVis(props) {
  const [showModal, setShowModal] = useState(props.modalopen);
  const [curInd, setCurInd] = useState(0);
  const [clicked, setClicked] = useState(false);
  const circles = [];
  const text = [];
  for (const [index, value] of props.curTraining.positions.entries()) {
    circles.push(<circle className={clicked ? "clicked" : "unclicked"} r="10" cx={props.curTraining["positions"][index].x} cy={props.curTraining["positions"][index].y} fill="#FFFFC9" stroke="black" strokeWidth="1"  onClick={() => {
      props.setProgress(props.progress+5);
      setCurInd(index);
      setShowModal(true);
      console.log(index);
      setClicked(true);
    }}/>
    )};


    for (const [index, value] of props.curTraining.positions.entries()) {
      text.push(<text x={props.curTraining["positions"][index].x-5} y={props.curTraining["positions"][index].y+5} fill="#FFFFC9" stroke="black" strokeWidth="1">{index+1}</text>
      )};

  return (<div>
    <div className="img-overlay-wrap">
      <img src={props.curTraining.imageurl} />
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
