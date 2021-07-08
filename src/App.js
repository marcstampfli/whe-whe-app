import "./App.css";

import Header from "./components/Header";
import Numbers from "./components/Numbers";
import MoneyValue from "./components/MoneyValue";
import NumbersSelected from "./components/NumbersSelected";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  min-height: 100%;
  /* overflow: hidden; */
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  min-height: 100%;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <AppContainer>
        <MoneyValue />
        <Numbers />
        <NumbersSelected />
      </AppContainer>
    </Wrapper>
  );
}

export default App;
