import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loading from "./Loading";
import BorderCountries from "./BorderCountries";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const BackBtn = styled(Button)`
  margin-bottom: 2.8rem !important;
  padding-left: 1.9rem !important;
  padding-right: 1.9rem !important;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;
`;

const DataWrapper = styled.div`
  display: flex;
`;

const Flag = styled.img`
  width: 40rem;
  height: 28rem;

  border: none;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 7rem;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
`;

const DetailLeft = styled.div`
min-width: 20rem;  
margin-right: 7rem;
`;

const DetailRight = styled.div``;

const Name = styled.h1`
  margin-left: 1rem;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 800;
`;

const Detail = styled.p`
  margin: 0 0 0.8rem 1rem;
  font-weight: 600;
  font-size: 1.1rem;
`;

const DetailData = styled.span`
  margin-left: 0.2rem;
  font-weight: 300;
`;

const DetailContent = ({ country, error }) => {
  const history = useHistory();
  const [currencies, setCurrencies] = useState("");

  const goBack = () => {
    history.push("/");
  };

  useEffect(() => {
    let currencies = "";
    country &&
      country?.currencies?.forEach((c) => (currencies += c.name + ", "));
    setCurrencies(currencies);
  }, [country]);

  return (
    <>
      <BackBtn onClick={goBack} variant='contained'>
        <ArrowBackIcon />
        Back
      </BackBtn>
      {error === true ? (
        <h1>No such country found</h1>
      ) : !country ? (
        <Loading />
      ) : (
        <DataWrapper>
          <Flag src={country.flag} alt={"flag"}></Flag>
          <DetailWrapper>
            <div>
              <Name>{country?.name}</Name>
              <Container>
                <DetailLeft>
                  <Detail>
                    Native Name: <DetailData>{country?.nativeName}</DetailData>
                  </Detail>
                  <Detail>
                    Population: <DetailData>{country?.population}</DetailData>
                  </Detail>
                  <Detail>
                    Region: <DetailData>{country?.region}</DetailData>
                  </Detail>
                  <Detail>
                    Sub Region: <DetailData>{country?.subregion}</DetailData>
                  </Detail>
                  <Detail>
                    Capital: <DetailData>{country?.capital}</DetailData>
                  </Detail>
                </DetailLeft>
                <DetailRight>
                  <Detail>
                    Top Level Domain:{" "}
                    <DetailData>{country?.topLevelDomain}</DetailData>
                  </Detail>
                  <Detail>
                    Currencies: <DetailData>{currencies}</DetailData>
                  </Detail>
                  <Detail>
                    Languages: <DetailData>{}</DetailData>
                  </Detail>
                </DetailRight>
              </Container>
            </div>
            <BorderCountries borders={country?.borders} />
          </DetailWrapper>
        </DataWrapper>
      )}
    </>
  );
};

export default DetailContent;
