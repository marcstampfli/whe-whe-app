import React from "react";
import styled from "styled-components";

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: blue;
  padding: 10px;
  /* min-height: 100%; */
  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Number = styled.div`
  display: flex;
  background-color: black;
  color: yellow;
  font-size: 6rem;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-weight: 700;
  &:hover,
  &.active {
    background: yellow;
    color: black;
    cursor: pointer;
  }
`;

function Numbers() {
  const printNumbers1To20 = () => {
    const row = [];
    for (var i = 1; i < 21; i++) {
      row.push(<Number key={i}>{i}</Number>);
    }
    return row;
  };

  return <NumbersContainer>{printNumbers1To20()}</NumbersContainer>;
}

export default Numbers;
