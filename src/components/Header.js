import React from "react";
import styled from "styled-components";
import { AppBar } from "@material-ui/core";
import ThemeChanger from "./ThemeChanger";

const Bar = styled(AppBar)`
  height: 5em;
  padding-left: 4em;
  padding-right: 4em;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor} !important;
  &.MuiAppBar-colorPrimary {
    background-color: ${(props) => props.theme.backgroundElements} !important;
  }

  @media (max-width: 630px) {
    padding-left: ${(props) => props.theme.s.padding};
    padding-right: ${(props) => props.theme.s.padding};

    font-size: 1.5em;
  }

  @media (max-width: 425px) {
    height: 6em;
  }
`;

const Headline = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
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
