import React, {useState} from "react";
import {LinearProgress} from "@mui/material";

export default function LearningProgress(props){
    return (<div>
        <LinearProgress variant="determinate" value={props.progress}/>
    </div>)
}