import React from "react";
import * as types from "./types";
import { StyledBlueButton } from "./styles";

export const Button: React.FC<types.ButtonProps> = ({
  theme,
  children,
  onClick,
}) => {
  return (
    <>
      <StyledBlueButton theme={theme} children={children} onClick={onClick} />
    </>
  );
};
