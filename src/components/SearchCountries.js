import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Paper } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: space-between;
`;

const SearchBackground = styled(Paper)`
  height: 3rem;
  width: 25rem;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
`;

const SearchCountries = ({ searchTerm }) => {
  const search = (e) => {
    searchTerm(e.toLowerCase());
  };

  return (
    <Container>
      <SearchBackground elevation={3}>
        <div>
          <SearchIcon />
        </div>
        <InputBase
          onChange={(e) => search(e.target.value)}
          placeholder='Search…'
        />
      </SearchBackground>
    </Container>
  );
};

export default SearchCountries;
