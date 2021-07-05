import React from "react";
import styled from "styled-components";

const Name = styled.span`
  font-size: 0.9rem;
  margin-left: 5px;
  font-family: Nunito Sans;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;

const ThemeName = (props) => {
  return <Name>{props.name}</Name>;
};

export default ThemeName;
