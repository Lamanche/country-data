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

const DetailPage = ({ error, setCurrentCountry }) => {
  const location = useLocation();
  const countries = useContext(CountriesContext)
  const country = useContext(CurrentCountryContext);

  useEffect(() => {
    console.log(location);
    const name = location.pathname.slice(1)
    if (country.name !== name) {
      const result = countries.find((country) => country.name.toLowerCase() === name.toLowerCase());
      setCurrentCountry(result);
    }
    
    
    
  }, [location]);

  return (
    <Container>
      <DetailContent
        country={country}
        error={error}
        setCurrentCountry={setCurrentCountry}
      />
    </Container>
  );
};

export default DetailPage;
