import React, { useContext } from "react";
import styled from "styled-components";
import { NumberContext } from "../contexts/NumberContext";
import { MoneyValueContext } from "../contexts/MoneyValueContext";

function NumbersSelected() {
  const [selectedNumbers] = useContext(NumberContext);
  const [moneyValueTotal] = useContext(MoneyValueContext);

  return (
    <NumbersSelectedContainer>
      <Marks>
        <h1>Numbers Selected</h1>
        {selectedNumbers.map((selectedNumber) => (
          <h3 key={selectedNumber}>Mark: {selectedNumber}</h3>
        ))}
      </Marks>
      <h1>Total: ${moneyValueTotal}</h1>
    </NumbersSelectedContainer>
  );
}

export default NumbersSelected;

const NumbersSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, yellow 0%, orange 100%);
  padding-left: 30px;
  @media (max-width: 1024px) {
    align-items: center;
    padding-left: 0;
  }
  h1 {
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 468px) {
      font-size: 2.5rem;
    }
  }
`;

const Marks = styled.div`
  h1 {
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 468px) {
      font-size: 2.5rem;
    }
  }
  h3 {
    margin: 0 0 5px 0;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 468px) {
      font-size: 1.6rem;
    }
  }
`;
