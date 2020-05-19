import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
  height: 2px;
  margin-bottom: 4px;
  border: #ddd;
  background: #ddd;
`;

export const Divider: React.FC = () => {
  return <StyledDivider />;
};
