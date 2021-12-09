import React, {useState} from "react";
import {LinearProgress} from "@mui/material";

export default function LearningProgress(props){
    return (
    //all this does is takes the progress from trainer and puts it in a pretty progress bar
    //i did set it to be not the normal mui color tho
    <div>
        <LinearProgress variant="determinate" value={props.progress} color="inherit"/>
    </div>)
}