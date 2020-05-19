import styled from "styled-components";
import * as types from "./types";

export const StyledModalContainer = styled.div<types.ModalProps>`
  display: ${(props) => (props.show ? `block` : `none`)};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const StyledModalContent = styled.div<types.ModalProps>`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${(props) => (props.width === "full" ? "935px;" : "467.5px;")}
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 3;
  max-height: 700px;
  overflow-y: scroll;

  :-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #dedede;
  }
  
  ::-webkit-scrollbar
  {
    width: 12px;
    background-color: #dedede;
  }
  
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #dedede;
  }
`;

export const StyledCloseModal = styled.span`
  position: absolute;
  color: #333;
  float: right;
  font-size: 28px;
  font-weight: bold;
  top: 3px;
  right: 7px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
