/* eslint-disable react-hooks/exhaustive-deps */
import styled, { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import Header from "./components/Header";
import { lightTheme } from "./themes";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";
import axios from "axios";
import { Route, Switch, useLocation } from "react-router-dom";
import {
  CountriesContext,
  CurrentCountryContext,
} from "./components/CountriesContext";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});
  const [error, setError] = useState(false);

  const location = useLocation();

  const getCountries = async () => {
    try {
      const data = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(data.data);
      if (location.pathname.length > 1) {
        const countryName = location.pathname.slice(1);
        const result = data.data.find(
          (country) => country.name.toLowerCase() === countryName.toLowerCase()
        );
        if (!result) {
          setError(true);
        } else {
          setCurrentCountry(result);
        }
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CountriesContext.Provider value={countries}>
        <CurrentCountryContext.Provider value={currentCountry}>
          <Container>
            <Header currentTheme={theme} changeTheme={setTheme} />
            <Switch>
              <Route exact path='/'>
                {!countries ? (
                  <Loading />
                ) : (
                  <Main setCurrentCountry={setCurrentCountry} />
                )}
              </Route>
              <Route path='/:country'>
                <DetailPage
                  error={error}
                  setCurrentCountry={setCurrentCountry}
                />
              </Route>
            </Switch>
          </Container>
        </CurrentCountryContext.Provider>
      </CountriesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
