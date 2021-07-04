import { Card } from "@material-ui/core";
import styled from "styled-components";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentCountryContext } from "./CountriesContext";

const Country = styled(Card)`
  width: 15rem;
  height: 19rem;
  margin: 0 0.2rem 2.5rem 0.2rem;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;
  &:hover {
    cursor: pointer;
  }
`;

const Flag = styled.img`
  height: 50%;
  width: 100%;
  border: none;
`;

const Name = styled.h1`
  margin-left: 1rem;
  font-size: 1.05rem;
  font-weight: 800;
`;

const Detail = styled.p`
  margin: 0 0 0.1rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
`;

const DetailData = styled.span`
  font-weight: 300;
`;

const CountryCard = ({ country }) => {
  const { setCurrentCountry } = useContext(CurrentCountryContext);
  const history = useHistory();

  const toDetailPage = () => {
    setCurrentCountry(country);
    history.push(country.name);
  };

  return (
    <Country onClick={toDetailPage}>
      <Flag src={country.flag} alt={"flag"}></Flag>
      <Name>{country.name}</Name>
      <Detail>
        Population: <DetailData>{country.population}</DetailData>
      </Detail>
      <Detail>
        Region: <DetailData>{country.region}</DetailData>
      </Detail>
      <Detail>
        Capital: <DetailData>{country.capital}</DetailData>
      </Detail>
    </Country>
  );
};

export default CountryCard;
