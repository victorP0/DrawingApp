import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function BrushText({ brushSize }) {
  return (
    <p>
      <FontAwesomeIcon icon="paint-brush"/>
      <i >Brush size:{" "}</i>
      {Math.round(brushSize / 5)} (1-3)
    </p>
  );
}

export default BrushText;
