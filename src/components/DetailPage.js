import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { CountriesContext, CurrentCountryContext } from "./CountriesContext";
import DetailContent from "./DetailContent";

const Container = styled.div`
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  padding-top: 2.8rem;  
  color: ${(props) => props.theme.textColor} !important; 
  }
`;

const DetailPage = ({ error }) => {
  const location = useLocation();
  const countries = useContext(CountriesContext);
  const { currentCountry, setCurrentCountry } = useContext(
    CurrentCountryContext
  );

  useEffect(() => {
    const name = location.pathname.slice(1);
    if (currentCountry.name !== name) {
      const result = countries.find(
        (country) => country.name.toLowerCase() === name.toLowerCase()
      );
      setCurrentCountry(result);
    }
  }, [location]);

  return (
    <Container>
      <DetailContent
        country={currentCountry}
        error={error}
        setCurrentCountry={setCurrentCountry}
      />
    </Container>
  );
};

export default DetailPage;
