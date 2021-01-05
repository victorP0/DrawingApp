import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Colors({ color, setColor }) {
  return (
    <div className="colorpick">
      <FontAwesomeIcon icon="palette"/>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </div>
  );
}

export default Colors;
