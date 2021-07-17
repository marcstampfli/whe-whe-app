import React, { useContext } from "react";
import styled from "styled-components";
import { NumberContext } from "../contexts/NumberContext";
import { MoneyValueContext } from "../contexts/MoneyValueContext";

function Numbers() {
  const numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push(<span>{i}</span>);
  }

  const [selectedNumbers, setSelectedNumbers] = useContext(NumberContext);
  const [moneyValueTotal, setMoneyValueTotal] = useContext(MoneyValueContext);

  const selectNumber = (e) => {
    e.preventDefault();
    setSelectedNumbers((prevNumbers) => [
      ...prevNumbers,
      { selectedNumbers: selectedNumbers },
    ]);
  };

  const clearNumbers = (e) => {
    e.preventDefault();
    setSelectedNumbers([]);
    setMoneyValueTotal(0);
  };

  const cashTicket = () => {
    alert(`Total: ${moneyValueTotal}`);
  };

  const selectedNumber = numbers.includes(selectedNumbers);

  return (
    <NumbersContainer>
      {numbers.map((number) => (
        <Number
          key={number}
          onClick={selectNumber}
          className={selectedNumber ? "active" : ""}
        >
          {number}
        </Number>
      ))}
      <Cash onClick={cashTicket}>Cash</Cash>
      <Clear onClick={clearNumbers}>Clear</Clear>
    </NumbersContainer>
  );
}

export default Numbers;

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: darkblue;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Number = styled.button`
  display: flex;
  background-color: black;
  color: yellow;
  font-size: 6rem;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: ease all 250ms;
  border: 1px solid #333;
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
  &:hover,
  &.active {
    background: yellow;
    color: black;
    cursor: pointer;
  }
`;

const Cash = styled.button`
  background-color: darkgreen;
  font-size: 5rem;
  font-weight: bold;
  grid-column: 1 / 4;
  cursor: pointer;
  transition: ease all 250ms;
  color: white;
  border: 1px solid #333;
  &:hover {
    background-color: green;
  }
  @media (max-width: 468px) {
    font-size: 2.5rem;
  }
`;

const Clear = styled(Cash)`
  grid-column: 4 / 6;
  background-color: darkred;
  &:hover {
    background-color: red;
  }
`;
