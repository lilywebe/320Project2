import React, { useState, useEffect, useRef } from "react";

export default function Completion(props) {



  return <div><Modal open={showModal}
  onClose={() => {
    setShowModal(false);
  }}><h3>You finished training!</h3></Modal></div>;
}
