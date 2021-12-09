import React, { useState, useEffect, useRef } from "react";
import { Modal, Fade, Box } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';




export default function Completion(props) {

  //mui docs donation <3
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
//end donation


//if last button was clicked, show completion modal
if(props.progress>=150){
  return <div><Modal open 
  onClose={() => {
    //after they close the modal, refresh the whole page
    window.location.reload();
  }}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
  aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
  >
    <Fade in={true}>
      <Box sx={style}>
  <h3>You finished training!</h3>
  </Box>
  </Fade></Modal></div>;
}
else{
    return <div></div>
}
}
