import React, { useState, useContext } from "react";
import { ArtsContext } from "../Context";
import config from "./config";

function AddImage({ canvas, ctx, setLastPath, setPath }) {
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [arts, setArts] = useContext(ArtsContext);

  const saveImage = (e) => {
    e.preventDefault();
    const url = canvas.current.toDataURL("image/jpeg");
    const dateadded = new Date()
    const newArt = { src: url, author: author, description: description, dateadded };
    fetch(`${config.API_ENDPOINT}/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer b670ad9e-011b-4b6c-ad9d-b857cfb108eb",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("Server did not accept our image, booo")
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((newArt) => {
        setArts([...arts, newArt]);
      })
      .catch((error) => {
        console.error({ error });
      });
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.current.fillStyle = "white";
    ctx.current.fillRect(0, 0, canvas.current.width, canvas.current.height);
    setPath([]);
    setLastPath([]);
    setAuthor("");
    setDescription("");
  };

  return (
    <form onSubmit={saveImage}>
      <input
        type="text"
        label = "Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        minLength="3"
        maxLength="10"
        placeholder=" Author"
        required
      />
      <input
        type="text"
        label = "description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength="3"
        maxLength="140"
        placeholder=" Description (optional)"
      />
      <button type="submit" value="Submit" label = "addToGallery">
        <i className="fas fa-plus-square"></i> Add to Gallery
      </button>
    </form>
  );
}

export default AddImage;
