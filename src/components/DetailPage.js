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
  padding-bottom: ${(props) => props.theme.xl.padding};
  padding-top: 2.8em;  
  color: ${(props) => props.theme.textColor} !important; 
  }

  @media (max-width: 630px) {
    padding-left: ${(props) => props.theme.s.padding};
    padding-right: ${(props) => props.theme.s.padding};
    padding-bottom: ${(props) => props.theme.s.padding};
  }
`;

const DetailPage = ({ error }) => {
  const location = useLocation();
  const countries = useContext(CountriesContext);
  const { currentCountry, setCurrentCountry } = useContext(
    CurrentCountryContext
  );
  const [currencies, setCurrencies] = useState("");
  const [population, setPopulation] = useState("");
  const [languages, setLanguages] = useState("");
  const [latlng, setLatlng] = useState();
  const [tld, setTld] = useState("");
  const borders = useTranslateBorders(currentCountry);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const name = location.pathname.slice(1);
    if (currentCountry.name !== name) {
      const result = countries.find(
        (country) => country.name.common.toLowerCase() === name.toLowerCase()
      );
      setCurrentCountry(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    let currencies = "";
    currentCountry?.currencies &&
      Object.entries(currentCountry?.currencies).forEach(
        (c) => (currencies += c[1].name + ", ")
      );
    setCurrencies(trimString(currencies));
  }, [currentCountry]);

  useEffect(() => {
    let languages = "";
    currentCountry?.languages &&
      Object.entries(currentCountry?.languages).forEach(
        (l) => (languages += l[1] + ", ")
      );
    setLanguages(trimString(languages));
  }, [currentCountry]);

  useEffect(() => {
    currentCountry?.tld && setTld(currentCountry.tld[0]);
  }, [currentCountry]);

  useEffect(() => {
    currentCountry?.latlng !== []
      ? setLatlng(currentCountry?.latlng)
      : setLatlng([1, 1]);
  }, [currentCountry]);

  useEffect(() => {
    currentCountry?.population &&
      setPopulation(currentCountry?.population.toLocaleString());
  }, [currentCountry]);

  return (
    <Container>
      <DetailContent
        country={currentCountry}
        error={error}
        setCurrentCountry={setCurrentCountry}
        currencies={currencies}
        languages={languages}
        population={population}
        tld={tld}
        borders={borders}
        latlng={latlng}
      />
    </Container>
  );
};

export default DetailPage;
