import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import trimString from "../functions/trimString";
import useTranslateBorders from "../functions/useTranslateBorders";
import { CountriesContext, CurrentCountryContext } from "./CountriesContext";
import DetailContent from "./DetailContent";

const Container = styled.div`
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  padding-top: 2.8rem;  
  color: ${(props) => props.theme.textColor} !important; 
  }

  @media (max-width: 630px) {
    padding-left: ${(props) => props.theme.s.padding};
    padding-right: ${(props) => props.theme.s.padding};
  }
`;

const DetailPage = ({ error }) => {
  const location = useLocation();
  const countries = useContext(CountriesContext);
  const { currentCountry, setCurrentCountry } = useContext(
    CurrentCountryContext
  );
  const [currencies, setCurrencies] = useState("");
  const [languages, setLanguages] = useState("");
  const [latlng, setLatlng] = useState();
  const borders = useTranslateBorders(currentCountry);

  useEffect(() => {
    const name = location.pathname.slice(1);
    if (currentCountry.name !== name) {
      const result = countries.find(
        (country) => country.name.toLowerCase() === name.toLowerCase()
      );
      setCurrentCountry(result);
    }
  }, [location]);

  useEffect(() => {
    let currencies = "";
    currentCountry?.currencies?.forEach((c) => (currencies += c.name + ", "));
    setCurrencies(trimString(currencies));
  }, [currentCountry]);

  useEffect(() => {
    let languages = "";
    currentCountry?.languages?.forEach((l) => (languages += l.name + ", "));
    setLanguages(trimString(languages));
  }, [currentCountry]);

  useEffect(() => {
    setLatlng(currentCountry?.latlng);
  }, [currentCountry]);

  return (
    <Container>
      <DetailContent
        country={currentCountry}
        error={error}
        setCurrentCountry={setCurrentCountry}
        currencies={currencies}
        languages={languages}
        borders={borders}
        latlng={latlng}
      />
    </Container>
  );
};

export default DetailPage;
