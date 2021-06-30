import React, { useState } from "react";
import CountryCard from "./CountryCard";
import styled from "styled-components";
import SearchCountries from "./SearchCountries";

const Container = styled.div`
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  padding-top: 2.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  
  }
`;

/*&:after {
    content: "";
    width: 15rem;
    height: 19rem;
    margin: 0 0.2rem 2.5rem 0.2rem;
    flex-grow: 0;*/

const Main = ({ countries, setCurrentCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <Container>
      <SearchCountries searchTerm={setSearchTerm} />
      {countries
        .filter((country) => country.name.toLowerCase().startsWith(searchTerm))
        .map((country) => (
          <CountryCard
            key={country.numericCode}
            country={country}
            setCurrentCountry={setCurrentCountry}
          />
        ))}
    </Container>
  );
};

export default Main;
