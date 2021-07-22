import React, { useContext } from "react";
import styled from "styled-components";
import { NumberContext } from "../contexts/NumberContext";
import { MoneyValueContext } from "../contexts/MoneyValueContext";

function MoneyValue() {
  const [selectedNumbers] = useContext(NumberContext);
  const [moneyValueTotal, setMoneyValueTotal] = useContext(MoneyValueContext);

  const selectMoneyValue = (e) => {
    e.preventDefault();

    if (selectedNumbers.length === 5) {
      setMoneyValueTotal((prevValue) => [
        ...prevValue,
        { moneyValueTotal: moneyValueTotal },
      ]);
    } else {
      alert("Select 5 numbers to set a money value.");
    }
  };

  return (
    <MoneyValueContainer>
      <Money onClick={selectMoneyValue} value="1">
        $1
      </Money>
      <Money onClick={selectMoneyValue} value="5">
        $5
      </Money>
      <Money onClick={selectMoneyValue} value="10">
        $10
      </Money>
      <Money onClick={selectMoneyValue} value="20">
        $20
      </Money>
    </MoneyValueContainer>
  );
}

export default MoneyValue;

const MoneyValueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: linear-gradient(0deg, yellow 0%, orange 100%);
`;

const Money = styled.div`
  display: flex;
  font-size: 4rem;
  cursor: pointer;
  a {
    color: red;
  }
`;
