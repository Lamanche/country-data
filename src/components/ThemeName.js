import React from "react";
import styled from "styled-components";

const Name = styled.span`
  font-size: 0.9em;
  margin-left: 5px;
  font-family: Nunito Sans;
  font-weight: 600;
`;

const ThemeName = (props) => {
  return <Name>{props.name}</Name>;
};

export default ThemeName;
