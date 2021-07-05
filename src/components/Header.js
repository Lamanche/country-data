import React from "react";
import styled from "styled-components";
import { AppBar } from "@material-ui/core";
import ThemeChanger from "./ThemeChanger";

const Bar = styled(AppBar)`
  height: 5rem;
  padding-left: ${(props) => props.theme.xl.padding};
  padding-right: ${(props) => props.theme.xl.padding};
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor} !important;
  &.MuiAppBar-colorPrimary {
    background-color: ${(props) => props.theme.backgroundElements} !important;
  }

  @media (max-width: 425px) {
    padding-left: ${(props) => props.theme.s.padding};
    padding-right: ${(props) => props.theme.s.padding};
  }
`;

const Headline = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Header = ({ currentTheme, changeTheme }) => {
  return (
    <div>
      <Bar position='static'>
        <Headline>Where in the world?</Headline>
        <ThemeChanger currentTheme={currentTheme} changeTheme={changeTheme} />
      </Bar>
    </div>
  );
};

export default Header;
