import React from "react";
import styled from "styled-components";

const MoneyValueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* height: 150px; */
  align-items: center;
  background: linear-gradient(0deg, rgba(255, 209, 0, 1) 20%, orange 100%);
`;

const Money = styled.div`
  display: flex;
  font-size: 4rem;
  a {
    color: red;
  }
`;

function MoneyValue() {
  return (
    <MoneyValueContainer>
      {/* <div>
        <img src="../img/lotteryballs.png" alt="" width="100%" />
      </div> */}
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
