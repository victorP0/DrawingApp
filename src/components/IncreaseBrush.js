import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function IncreaseBrush({ brushSize, setBrushSize }) {
  return (
    <button
      onClick={() => brushSize < 15 && setBrushSize(brushSize + 5)}
      className="add"
    >
      <FontAwesomeIcon icon="plus-square" size="lg"/>
    </button>
  );
}

export default IncreaseBrush;
