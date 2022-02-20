import React, { useContext, useEffect } from "react";
import CountryCard from "./CountryCard";
import styled from "styled-components";
import SearchCountries from "./SearchCountries";
import { CountriesContext } from "./CountriesContext";

const Container = styled.div`
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  padding-top: 3em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    padding-left: ${(props) => props.theme.s.padding};
    padding-right: ${(props) => props.theme.s.padding};
    padding-top: 2em;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15em);
  grid-auto-rows: 21em;
  justify-content: center;
  gap: 4em;

  @media (max-width: 425px) {
    grid-template-columns: 80%;
    grid-auto-rows: 45em;
  }
`;

const Main = ({
  region,
  setRegion,
  searchTerm,
  setSearchTerm,
  scrollPosition,
  setScrollPosition,
}) => {
  const countries = useContext(CountriesContext);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SearchCountries
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        region={region}
        setRegion={setRegion}
      />
      <GridContainer>
        {countries
          .filter(
            (country) =>
              country.name.common.toLowerCase().startsWith(searchTerm) &&
              country.region.includes(region)
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              setScrollPosition={setScrollPosition}
            />
          ))}
      </GridContainer>
    </Container>
  );
};

export default Main;
