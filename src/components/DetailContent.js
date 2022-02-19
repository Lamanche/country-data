import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loading from "./Loading";
import BorderCountries from "./BorderCountries";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Map from "./Map";

const TopWrapper = styled.div``;

const BackBtn = styled(Button)`
  margin-bottom: 2.8em !important;
  padding-left: 1.9em !important;
  padding-right: 1.9em !important;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;

  @media (max-width: 425px) {
    margin-bottom: 4em !important;
  }
`;

const Wrapper = styled.div``;

const DataWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20em;

  @media (max-width: 1230px) {
    flex-direction: column;
    height: 100%;
  }
`;

const FlagContainer = styled.div`
  width: 30em;
  height: 100%;
  margin-right: 4em;

  @media (max-width: 1230px) {
    height: 20em;
    margin-bottom: 2em;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 25em;
    margin-right: 0;
  }
`;

const Flag = styled.img`
  height: 100%;
  width: 100%;
`;

const DetailWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailLeft = styled.div`
  margin-right: 4em;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-right: 0em;
  }

  @media (max-width: 550px) {
    font-size: 1.8em;
  }
`;

const DetailRight = styled.div`
  margin-bottom: 2em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 550px) {
    font-size: 1.8em;
  }
`;

const Name = styled.h1`
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 550px) {
    font-size: 3.2em;
  }
`;

const Detail = styled.p`
  margin: 0 0 0.4em 0;
  font-weight: 600;
  font-size: 1em;
`;

const DetailData = styled.span`
  margin-left: 0.2em;
  font-weight: 300;
`;

const DetailContent = ({
  country,
  error,
  currencies,
  population,
  borders,
  languages,
  tld,
  latlng,
}) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <TopWrapper>
      <BackBtn onClick={goBack} variant='contained'>
        <ArrowBackIcon />
        Back
      </BackBtn>
      {error === true ? (
        <h1>No such country found</h1>
      ) : !country ? (
        <Loading />
      ) : (
        <Wrapper>
          <DataWrapper>
            <FlagContainer>
              <Flag src={country?.flags?.png} alt={"flag"}></Flag>
            </FlagContainer>

            <DetailWrapper>
              <Name>{country?.name?.common}</Name>
              <Container>
                <DetailLeft>
                  <Detail>
                    Population: <DetailData>{population}</DetailData>
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
                    Top Level Domain: <DetailData>{tld}</DetailData>
                  </Detail>
                  <Detail>
                    Currencies: <DetailData>{currencies}</DetailData>
                  </Detail>
                  <Detail>
                    Languages: <DetailData>{languages}</DetailData>
                  </Detail>
                </DetailRight>
              </Container>
              <BorderCountries borders={borders} />
            </DetailWrapper>
          </DataWrapper>
          {latlng ? <Map latlng={latlng} /> : <Loading />}
        </Wrapper>
      )}
    </TopWrapper>
  );
};

export default DetailContent;
