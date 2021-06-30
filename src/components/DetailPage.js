import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailContent from "./DetailContent";

const Container = styled.div`
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  padding-top: 2.8rem;  
  color: ${(props) => props.theme.textColor} !important; 
  }
`;

const DetailPage = ({ country }) => {
  const [loading, setLoading] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(country);
  const [error, setError] = useState(false);
  const url = useParams();
  const countryName = url.country;

  const getCountry = async (name) => {
    setLoading(true);
    try {
      const data = await axios(`https://restcountries.eu/rest/v2/name/${name}`);
      setLoading(false);
      setCurrentCountry(data.data[0]);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(country);
    if (countryName !== country.name) {
      getCountry(countryName);
    }
  }, []);

  return (
    <Container>
      <DetailContent country={currentCountry} error={error} loading={loading} />
    </Container>
  );
};

export default DetailPage;
