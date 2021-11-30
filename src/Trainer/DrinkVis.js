import React, { useState, useEffect, useRef } from "react";
import {Modal} from "@mui/material";

export default function DrinkVis(props){
const [showModal, setShowModal] = useState(props.modalopen);


  console.log(props.modalopen)
    return (<div>
      <div className="img-overlay-wrap">
      <img src={props.curTraining.imageurl}/>
        <svg viewBox="0 0 200 200">
        <circle r="20" cx={props.curTraining["positions"][0].x} cy={props.curTraining["positions"][0].y} fill="black" />
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