import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Paper, Select, InputLabel, MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  margin-bottom: 3em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 630px) {
    flex-direction: column;
    
`;

const SearchBackground = styled(Paper)`
  height: 3rem;
  width: 25em;
  min-width: 15rem;
  box-sizing: border-box;
  padding-left: 1.5em;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;

  @media (max-width: 630px) {
    width: 100%;
    margin-bottom: 2.5em;
  }
`;

const Input = styled(InputBase)`
  color: ${(props) => props.theme.textColor} !important;
  width: 100%;
`;

const SelectBackground = styled(Paper)`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundElements} !important;

  & .MuiFormLabel-root {
    color: rgb(132 140 147);
  }

  & .MuiSelect-icon {
    color: rgb(132 140 147);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: rgb(132 140 147);
  }

  & .MuiSelect-select:focus {
    background-color: transparent !important;
  }
`;

const Form = styled(FormControl)`
  height: 3rem !important;
  width: 10rem !important;
`;

const Selector = styled(Select)`
  height: 100%;
  width: 100% !important;

  & .MuiSelect-root {
    color: ${(props) => props.theme.textColor} !important;
  }

  &.MuiOutlinedInput-root {
    border: none;
    background-color: ${(props) => props.theme.backgroundElements} !important;
  }

  &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  @media (hover: none) {
    &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
    
  }
  &.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  &.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  &.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  &.MuiOutlinedInput-notchedOutline {
    border: none
  }
  &.MuiOutlinedInput-input:-webkit-autofill {
    border: none;
`;

const SearchCountries = ({ searchTerm, setSearchTerm, region, setRegion }) => {
  const search = (e) => {
    setSearchTerm(e.toLowerCase());
  };

  const searchRegion = (e) => {
    e.target.value === "All" ? setRegion("") : setRegion(e.target.value);
  };

  return (
    <Container>
      <SearchBackground elevation={3}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchIcon style={{ marginRight: ".5em" }} />
        </div>
        <Input
          onChange={(e) => search(e.target.value)}
          placeholder='Search for a country'
          value={searchTerm}
        />
      </SearchBackground>

      <Form variant='outlined'>
        <SelectBackground elevation={3}>
          <InputLabel id='demo-controlled-open-select-label'>
            Filter by Region
          </InputLabel>
          <Selector
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            value={region === "" ? "All" : region}
            onChange={searchRegion}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"America"}>America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Selector>
        </SelectBackground>
      </Form>
    </Container>
  );
};

export default SearchCountries;
