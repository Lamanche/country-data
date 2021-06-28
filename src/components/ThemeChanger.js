import React from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../themes";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";

const ThemeButton = styled.button`
display: flex;
align-items: center;  
border: none;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundElements};
  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeChanger = ({ currentTheme, changeTheme }) => {
  const toggleTheme = () => {
    currentTheme === lightTheme
      ? changeTheme(darkTheme)
      : changeTheme(lightTheme);
  };

  return (
    <ThemeButton onClick={toggleTheme}>
      {currentTheme === lightTheme ? <NightsStayIcon /> : <Brightness4OutlinedIcon />}
      {currentTheme === lightTheme ? 'Dark Mode' : 'Light Mode'}
    </ThemeButton>
  );
};

export default ThemeChanger;
