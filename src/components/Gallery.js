import React, { useContext} from "react";
import Craft from "./Crafts";
import { ArtsContext } from "../Context";

function Gallery() {
  const [arts] = useContext(ArtsContext);

  return (
    <div className="gallery-container" >
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
