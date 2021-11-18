import React, { useState, useEffect, useRef } from "react";
import {Modal} from "@mui/material";

export default function DrinkVis(props){
const [showModal, setShowModal] = useState(props.modalopen);


  console.log(props.modalopen)
    return (<div>
      <img src={props.curTraining.imageurl}/>
        <svg>
        <circle r="20" cx={props.curTraining["positions"][0].x} cy={props.curTraining["positions"][0].y} fill="black" />
      </svg>
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