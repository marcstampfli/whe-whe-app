import "./App.css";

import Header from "./components/Header";
import Numbers from "./components/Numbers";
import MoneyValue from "./components/MoneyValue";
import NumbersSelected from "./components/NumbersSelected";

import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <MoneyValue />
        <Numbers />
        <NumbersSelected />
      </AppContainer>
    </>
  );
}

export default App;
