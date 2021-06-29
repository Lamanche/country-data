import { Card } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const Country = styled(Card)`
  width: 15rem;
  height: 19rem;
  margin-bottom: 2.5rem;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;
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
margin: 0 0 .1rem 1rem;
font-weight: 600;
font-size: .9rem;
`;

const DetailData = styled.span`
font-weight: 300;
`;

const CountryCard = ({ country }) => {
  return (
    <Country>
      <Flag src={country.flag} alt={'flag'}></Flag>
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
