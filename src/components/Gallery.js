import React, { useContext, useEffect } from "react";
import Craft from "./Crafts";
import { ArtsContext } from "../Context";

function Gallery() {
  const [arts, setArts] = useContext(ArtsContext);

  return (
    <div>
      {arts.map((art) => {
        return (
          <Craft
            author={art["author"]}
            description={art["description"]}
            src={art["src"]}
            key={art["id"]}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
