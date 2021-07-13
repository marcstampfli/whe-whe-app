import "./App.css";
import { NumberProvider } from "./contexts/NumberContext";
import { MoneyValueProvider } from "./contexts/MoneyValueContext";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import MoneyValue from "./components/MoneyValue";
import NumbersSelected from "./components/NumbersSelected";
import styled from "styled-components";

function App() {
  return (
    <NumberProvider>
      <MoneyValueProvider>
        <Wrapper>
          <Header />
          <AppContainer>
            <MoneyValue />
            <Numbers />
            <NumbersSelected />
          </AppContainer>
        </Wrapper>
      </MoneyValueProvider>
    </NumberProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  min-height: calc(100vh - 190px);
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    min-height: initial;
  }
`;
