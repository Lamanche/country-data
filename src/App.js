import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { lightTheme } from "./themes";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    setLoading(true);
    try {
      const data = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header currentTheme={theme} changeTheme={setTheme} />
        {loading ? <h1>Loading...</h1> : <Main countries={countries} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
