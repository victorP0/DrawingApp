import React, { useContext } from "react";
import Craft from "./Crafts";
import { artsContext } from "../Context";

function Gallery() {
  const [arts] = useContext(artsContext);

  // useEffect(() => {
  //   fetch("/gallery")
  //     .then((x) => x.json())
  //     .then((data) => setArts(data));
  // }, []);

  return (
    <div>
      {arts.map((art) => {
        return (
          <Craft
            author={art["author"]}
            description={art["description"]}
            src={art["img"]}
            key={art["id"]}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
