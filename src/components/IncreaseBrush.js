import React from "react";

function IncreaseBrush({ brushSize, setBrushSize }) {
  return (
    <button
      onClick={() => brushSize < 15 && setBrushSize(brushSize + 5)}
      className="add"
    >
      <i className="fas fa-plus-square fa-2x"></i>
      Increase
    </button>
  );
}

export default IncreaseBrush;
