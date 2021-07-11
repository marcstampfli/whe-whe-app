import React from "react";
import styled from "styled-components";

const NumbersSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(255, 209, 0, 1) 20%, orange 100%);
  padding-left: 30px;
`;

const Marks = styled.div`
  h3 {
    margin: 0 0 5px 0;
    font-weight: 700;
  }
`;

function NumbersSelected() {
  return (
    <NumbersSelectedContainer>
      <Marks>
        <h1>Numbers Selected</h1>
        <h3>Mark: 2</h3>
        <h3>Mark: 12</h3>
        <h3>Mark: 20</h3>
        <h3>Mark: 8</h3>
        <h3>Mark: 17</h3>
      </Marks>
      <h1>Total: $25.00</h1>
    </NumbersSelectedContainer>
  );
}

export default NumbersSelected;
