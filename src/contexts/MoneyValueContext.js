import React, { useState, createContext } from "react";

export const MoneyValueContext = createContext();

export const MoneyValueProvider = (props) => {
  const [moneyValueTotal, setMoneyValueTotal] = useState(40);

  return (
    <MoneyValueContext.Provider value={[moneyValueTotal, setMoneyValueTotal]}>
      {props.children}
    </MoneyValueContext.Provider>
  );
};
