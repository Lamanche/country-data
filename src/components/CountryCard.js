import { Card } from "@material-ui/core";
import styled from "styled-components";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentCountryContext } from "./CountriesContext";

const Country = styled(Card)`
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 425px) {
    font-size: 2.3em;
  }
`;

const Flag = styled.img`
  height: 50%;
  width: 100%;
  border: none;
`;

const InfoContainer = styled.div`
  padding: 0.75em 1.5em;
`;

const Name = styled.h1`
  margin-bottom: 0.75em;
  font-size: 1.05em;
  font-weight: 800;
`;

const Detail = styled.p`
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 0.9em;
`;

const DetailData = styled.span`
  font-weight: 300;
`;

const CountryCard = ({ country, setScrollPosition }) => {
  const { setCurrentCountry } = useContext(CurrentCountryContext);
  const history = useHistory();

  const toDetailPage = () => {
    setCurrentCountry(country);
    setScrollPosition(window.pageYOffset);
    history.push(country.name.common);
  };

  return (
    <Country onClick={toDetailPage}>
      <Flag src={country.flags.png} alt={"flag"}></Flag>
      <InfoContainer>
        <Name>{country.name.common}</Name>
        <Detail>
          Population:{" "}
          <DetailData>{country.population.toLocaleString()}</DetailData>
        </Detail>
        <Detail>
          Region: <DetailData>{country.region}</DetailData>
        </Detail>
        <Detail>
          Capital: <DetailData>{country.capital}</DetailData>
        </Detail>
      </InfoContainer>
    </Country>
  );
};

export default CountryCard;
