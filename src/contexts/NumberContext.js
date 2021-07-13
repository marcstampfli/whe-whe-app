import React, { useState, createContext } from "react";

export const NumberContext = createContext();

export const NumberProvider = (props) => {
  const [selectedNumbers, setSelectedNumbers] = useState([5, 12, 20, 17, 8]);

  return (
    <NumberContext.Provider value={[selectedNumbers, setSelectedNumbers]}>
      {props.children}
    </NumberContext.Provider>
  );
};
