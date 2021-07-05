import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Paper, Select, InputLabel, MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const SearchBackground = styled(Paper)`
  height: 3rem;
  width: 25rem;
  box-sizing: border-box;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundElements} !important;
  color: ${(props) => props.theme.textColor} !important;

  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

const Input = styled(InputBase)`
  color: ${(props) => props.theme.textColor} !important;
  width: 100%;
`;

const SelectBackground = styled(Paper)`
  height: 100%;
  width: 100%;
`;

const Form = styled(FormControl)`
  height: 3rem !important;
  min-width: 10rem !important;
  
  @media (max-width: 425px) {
    width: 10rem;
    
  }
`;

const Selector = styled(Select)`
  height: 100%;
  width: 100% !important;
  
  &.MuiOutlinedInput-root {
    border: none;
    background-color: ${(props) => props.theme.backgroundElements} !important;
  }
  &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: none
  }
  @media (hover: none) {
    &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
    background-color: ${(props) => props.theme.backgroundElements} !important;
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
    border-radius: inherit;
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
        <Input onChange={(e) => search(e.target.value)} placeholder='Search…' />
      </SearchBackground>

      <Form variant='outlined'>
        <SelectBackground elevation={3}>
          <InputLabel id='demo-controlled-open-select-label'>
            Filter by Region
          </InputLabel>
          <Selector
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            //open={open}
            //onClose={handleClose}
            //onOpen={handleOpen}
            //value={age}
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Selector>
        </SelectBackground>
      </Form>
    </Container>
  );
};

export default SearchCountries;
