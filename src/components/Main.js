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
`;

const Main = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Container>
      <SearchCountries searchTerm={setSearchTerm} />
      {countries
        .filter((country) => country.name.toLowerCase().includes(searchTerm))
        .map((country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
    </Container>
  );
};

export default Main;
