import React from "react";
import styled from "styled-components";
import { AppBar } from "@material-ui/core";
import ThemeChanger from "./ThemeChanger";

const Bar = styled(AppBar)`
  height: 5rem;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  color: red;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor} !important;
  &.MuiAppBar-colorPrimary {
    background-color: ${(props) => props.theme.backgroundElements} !important;
  }
`;

const Header = ({ currentTheme, changeTheme }) => {
  return (
    <div>
      <Bar>
        <div>Hehyjllo</div>
        <ThemeChanger currentTheme={currentTheme} changeTheme={changeTheme} />
      </Bar>
    </div>
  );
};

export default Header;
