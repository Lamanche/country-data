import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loading from "./Loading";
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
  width: 36rem;
  height: auto;

  border: none;
`;

const DetailWrapper = styled.div``;

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

const DetailContent = ({ country, error, loading }) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  const toDetailPage = () => {
    history.push(country.name);
  };

  return (
    <>
      <BackBtn onClick={goBack} variant='contained'>
        <ArrowBackIcon />
        {"  "}Back
      </BackBtn>
      {error === true ? (
        <h1>No such country found</h1>
      ) : loading ? (
        <Loading />
      ) : (
        <DataWrapper>
          <Flag src={country.flag} alt={"flag"}></Flag>
          <DetailWrapper>
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
          </DetailWrapper>
        </DataWrapper>
      )}
    </>
  );
};

export default DetailContent;
