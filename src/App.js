/* eslint-disable react-hooks/exhaustive-deps */
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./components/Loading";
import Header from "./components/Header";
import {
  CountriesContext,
  CurrentCountryContext,
} from "./components/CountriesContext";
import useToggleTheme from "./functions/useToggleTheme";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, toggleTheme] = useToggleTheme();
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();

  const getCountries = async () => {
    try {
      const data = await axios("https://restcountries.com/v3.1/all");

      const sortedData = data.data.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      setCountries(sortedData);
      setLoading(false);
      if (location.pathname.length > 1) {
        const countryName = location.pathname.slice(1);
        const result = sortedData.find(
          (country) =>
            country.name.common.toLowerCase() === countryName.toLowerCase()
        );
        if (!result) {
          setError(true);
        } else {
          setCurrentCountry(result);
        }
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    getCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CountriesContext.Provider value={countries}>
        <CurrentCountryContext.Provider
          value={{ currentCountry, setCurrentCountry }}
        >
          <Container>
            <Header currentTheme={theme} changeTheme={toggleTheme} />
            <Switch>
              <Route exact path='/'>
                {loading ? (
                  <Loading />
                ) : (
                  <Main
                    region={region}
                    searchTerm={searchTerm}
                    setRegion={setRegion}
                    setSearchTerm={setSearchTerm}
                    scrollPosition={scrollPosition}
                    setScrollPosition={setScrollPosition}
                  />
                )}
              </Route>
              <Route path='/:country'>
                <DetailPage error={error} />
              </Route>
            </Switch>
          </Container>
        </CurrentCountryContext.Provider>
      </CountriesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
