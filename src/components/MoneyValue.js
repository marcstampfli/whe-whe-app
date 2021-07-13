import React from "react";
import styled from "styled-components";

function MoneyValue() {
  return (
    <MoneyValueContainer>
      <Money>
        <a href="/">$1</a>
      </Money>
      <Money>
        <a href="/">$5</a>
      </Money>
      <Money>
        <a href="/">$10</a>
      </Money>
      <Money>
        <a href="/">$20</a>
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
  a {
    color: red;
  }
`;
