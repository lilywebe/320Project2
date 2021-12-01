import React, { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";


//can't close and looks truly terrible <3

export default function Completion(props) {


if(props.progress==100){
  return <div><Modal open
  ><h3 id="infoBox">You finished training!</h3></Modal></div>;
}
else{
    return <div></div>
}
}
