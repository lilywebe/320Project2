import React, { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";


//doesn't let you see the last modal as it stands

export default function Completion(props) {


if(props.progress>=100){
  return <div><Modal open 
  onClose={() => {
    window.location.reload();
  }}
  ><h3 id="infoBox">You finished training!</h3></Modal></div>;
}
else{
    return <div></div>
}
}
