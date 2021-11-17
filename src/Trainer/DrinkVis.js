import React, { useState, useEffect, useRef } from "react";

export default function DrinkVis(props){

    return (<div>
        <svg>
        <circle r="20" cx={props.curTraining.positions[0].x} cy={props.curTraining.positions[0].y} fill="black" />
      </svg>
    </div>)
}