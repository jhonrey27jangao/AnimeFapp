import styled from "styled-components";
import * as types from "./types";

export const StyledBlueButton = styled.button<types.ButtonProps>`
  padding: 10px 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: ${(props) =>
    props.theme === "default" ? "#2fbbf0;" : "#ff6666;"}
  cursor: pointer;
  outline: none;

  &:focus {
    background: ${(props) =>
      props.theme === "default" ? "#2fbbd8;" : "#ff725b;"}
  }
`;
