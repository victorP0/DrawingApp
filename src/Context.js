//import { Children } from "react";
import React, { useState, createContext } from "react";

export const ArtsContext = createContext({
  arts: [],
  setArts: () => {}
});

// export const ArtsProvider = (props) => {
//   const [arts, setArts] = useState([]);
//   return (
//     <ArtsContext.Provider value={[arts, setArts]}>
//       {props.children}
//     </ArtsContext.Provider>
//   );
// };
