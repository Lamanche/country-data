import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { lightTheme } from "./themes";
import { useState } from "react";
import Main from "./components/Main";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header currentTheme={theme} changeTheme={setTheme} />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
