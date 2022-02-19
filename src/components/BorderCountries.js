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

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 550px) {
    font-size: 1.8em;
  }
`;

const BorderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Detail = styled.p`
  margin: 0 0.5em 0.1rem 0;
  font-weight: 600;
  font-size: 1em;

  @media (max-width: 630px) {
    margin-bottom: 2em;
  }
`;

const BorderButton = styled(Button)`
  font-size: 1em !important;
  margin-right: 0.5em !important;
  margin-left: 0.5em !important;
  margin-bottom: .5em !important;
  padding-left: 1.9em !important;
  padding-right: 1.9em !important;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;

  @media (max-width: 768px) {
    font-size: .8em !important;
  }

  @media (max-width: 550px) {
    font-size: .8em !important;
  }
`;

const BorderCountries = ({ borders }) => {
  const history = useHistory();
  const countries = useContext(CountriesContext);
  const { setCurrentCountry } = useContext(CurrentCountryContext);

  const toDetailPage = (e) => {
    const code = e.target.textContent;

    let result;
    // eslint-disable-next-line array-callback-return
    countries.find((country) => {
      if (country.name.common === code) result = country;
    });

    history.push(result.name.common);
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
