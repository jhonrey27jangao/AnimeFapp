import * as React from "react";
import * as types from "./types";
import { StyledContainer, StyledMain } from "./styles";

export const Container: React.FC<types.ContainerProps> = ({ children }) => {
  return (
    <StyledContainer>
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  );
};
