import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CountriesContext, CurrentCountryContext } from "./CountriesContext";

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 630px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BorderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Detail = styled.p`
  margin: 0 0.5rem 0.1rem 1rem;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 630px) {
    margin-bottom: 2rem;
  }
`;

const BorderButton = styled(Button)`
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
  margin-bottom: 1rem !important;
  padding-left: 1.9rem !important;
  padding-right: 1.9rem !important;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;
`;

const BorderCountries = ({ borders }) => {
  const history = useHistory();
  const countries = useContext(CountriesContext);
  const { setCurrentCountry } = useContext(CurrentCountryContext);

  const toDetailPage = (e) => {
    const code = e.target.textContent;
    const result = countries.find((country) => country.name === code);
    history.push(result.name);
    setCurrentCountry(result);
  };

  return (
    <Container>
      <Detail>Border Countries: </Detail>
      <BorderWrapper>
        {borders &&
          borders.map((border) => (
            <BorderButton
              key={border}
              variant='contained'
              onClick={toDetailPage}
            >
              {border}
            </BorderButton>
          ))}
      </BorderWrapper>
    </Container>
  );
};

export default BorderCountries;
