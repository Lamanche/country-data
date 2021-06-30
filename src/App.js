import styled, { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import Header from "./components/Header";
import { lightTheme } from "./themes";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");

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
      <Router>
        <Container>
          <Header currentTheme={theme} changeTheme={setTheme} />
          <Switch>
            <Route exact path='/'>
              {loading ? (
                <Loading />
              ) : (
                <Main
                  countries={countries}
                  setCurrentCountry={setCurrentCountry}
                />
              )}
            </Route>
            <Route path='/:country'>
              <DetailPage country={currentCountry} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
