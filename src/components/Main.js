import React, { useContext, useState } from "react";
import CountryCard from "./CountryCard";
import styled from "styled-components";
import SearchCountries from "./SearchCountries";
import { CountriesContext } from "./CountriesContext";

const Container = styled.div`
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  padding-top: 2.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  
  }

  @media (max-width: 768px) {    
    padding-top: 2rem;
    justify-content: space-around;
  }

  @media (max-width: 425px) {
    padding-left: ${(props) => props.theme.s.padding};
    padding-right: ${(props) => props.theme.s.padding};
    padding-top: 2rem;
    justify-content: center;
  }
`;

/*&:after {
    content: "";
    width: 15rem;
    height: 19rem;
    margin: 0 0.2rem 2.5rem 0.2rem;
    flex-grow: 0;*/

const Main = () => {
  const countries = useContext(CountriesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Container>
      <SearchCountries
        searchTerm={setSearchTerm}
        region={region}
        setRegion={setRegion}
      />
      {countries
        .filter(
          (country) =>
            country.name.toLowerCase().startsWith(searchTerm) &&
            country.region.includes(region)
        )
        .map((country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
    </Container>
  );
};

export default Main;
