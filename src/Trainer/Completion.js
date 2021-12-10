import React, { useState, useEffect, useRef } from "react";
import { Modal, Fade, Box } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';

//we're evolving this into an introduction screen as well as a completion screen <3


export default function Completion(props) {

  const [message, setMessage] = useState("");
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
  useEffect(() => {
    if (props.progress >= 150) {
      setMessage("Congrats! You finished all your training!")
    }
    else if (props.progress == 0) {
      setMessage("Let's get started training! Click on each numbered step for each drink to learn how to make them.")
    }
  }, [message, props.progress]);



  //if last button was clicked, show completion modal
  if (props.progress >= 150 || props.progress == 0) {
    return <div><Modal open
      onClose={() => {
        //after they close the modal, refresh the whole page
        if (props.progress > 0) {
          window.location.reload();
        }
        else {
          props.setProgress(props.progress + .1);
        }
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

          <h3>{message}</h3>
        </Box>
      </Fade></Modal></div>;
  }
  else {
    return <div></div>
  }
}
