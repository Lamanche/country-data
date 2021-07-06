import React from "react";
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

  @media (max-width: 425px) {
    margin-bottom: 4rem !important;
  }
`;

const DataWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Flag = styled.img`
  width: 40rem;
  height: 28rem;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 7rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 2rem 0 2rem 0rem;
  }
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

const DetailLeft = styled.div`
  min-width: 20rem;
  margin-right: 7rem;

  @media (max-width: 1440px) {
    margin: 0 0 2.6rem 0;
  }
`;

const DetailRight = styled.div`
  @media (max-width: 630x) {
    margin: 0 0 2.6rem 0;
  }
`;

const Name = styled.h1`
  margin-left: 1rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 800;
`;

const Detail = styled.p`
  margin: 0 0 0.4rem 1rem;
  font-weight: 600;
  font-size: 1rem;
`;

const DetailData = styled.span`
  margin-left: 0.2rem;
  font-weight: 300;
`;

const DetailContent = ({ country, error, currencies, borders, languages }) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

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
                    Languages: <DetailData>{languages}</DetailData>
                  </Detail>
                </DetailRight>
              </Container>
            </div>
            <BorderCountries borders={borders} />
          </DetailWrapper>
        </DataWrapper>
      )}
    </>
  );
};

export default DetailContent;
