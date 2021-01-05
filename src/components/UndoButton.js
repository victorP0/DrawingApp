import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function UndoButton({ action, enabling }) {
  return (
    <button
      onClick={action}
      disabled={enabling < 1 ? true : false}
      className="rewind"
    >
      {/* <i className="fas fa-undo-alt"></i> */}
      Undo       <FontAwesomeIcon icon="undo-alt"/>

    </button>
  );
}

export default UndoButton;
