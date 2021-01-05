import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Crafts({ author, description, src }) {
  return (
    <div className="gallery-item">
      <img src={src} alt={author} width="250px" />
      <small>
        <p>Made by</p>
        <p>
          <FontAwesomeIcon icon="user"/>
          <b>{author}</b>
        </p>
        <p className="description">{description}</p>
      </small>
    </div>
  );
}

export default Crafts;
