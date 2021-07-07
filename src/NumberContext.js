import React, { useState, createContext } from "react";

export const NumberContext = createContext();

export const NumberProvider = (props) => {
  const [numbers, setNumbers] = useState();
  return <NumberContext.Provider>{props.children}</NumberContext.Provider>;
};
