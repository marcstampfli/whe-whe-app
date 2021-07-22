import React from "react";
import styled from "styled-components";

function CashAmount(props) {
  return (
    <>
      <BackdropContainer /*onClick={props.onClose}*/ />
      <CashAmountContainer>
        <p>{props.text}</p>
        <button>
          Confirm
        </button>
        <button onClick={props.onClose}>
          Close
        </button>
      </CashAmountContainer>
    </>
  );
}

export default CashAmount;

const CashAmountContainer = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 10;
  position: fixed;
  top: 20vh;
  left: calc(50% - 15rem);
`;

const BackdropContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(255, 255, 0255, 0.3);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  /* cursor: pointer; */
`;
