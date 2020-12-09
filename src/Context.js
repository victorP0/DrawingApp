//import { Children } from "react";
import React, { useState, createContext } from "react";

export const artsContext = createContext([]);

export const ArtsProvider = (props) => {
  const [arts, setArts] = useState([]);
  return (
    <artsContext.Provider value={[arts, setArts]}>
      {props.children}
    </artsContext.Provider>
  );
};
