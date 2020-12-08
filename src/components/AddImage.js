import React, { useState, useContext } from "react";
import { artsContext } from "../Context";

function AddImage({ canvas, ctx }) {
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [arts, setArts] = useContext(artsContext);

  const saveImage = (e) => {
    e.preventDefault();
    const url = canvas.current.toDataURL("image/png");
    const newArt = { img: url, author: author, description: description };
    //console.log(newArt);
    setArts([...arts, newArt]);
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    console.log(arts);
    setAuthor("");
    setDescription("");
  };

  return (
    <form onSubmit={saveImage}>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        minLength="3"
        maxLength="10"
        placeholder="Author"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength="3"
        maxLength="140"
        placeholder="Description (optional)"
      />
      <button type="submit" value="Submit">
        <i className="fas fa-plus-square"></i> Add to Gallery
      </button>
    </form>
  );
}

export default AddImage;
