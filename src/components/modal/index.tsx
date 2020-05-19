import React, { useState, useEffect } from "react";
import {
  StyledModalContainer,
  StyledModalContent,
  StyledCloseModal,
} from "./styles";
import * as types from "./types";

export const Modal: React.FC<types.ModalProps> = ({
  children,
  show,
  onClose,
  width,
}) => {
  const [onShow] = useState(show);
  useEffect(() => {
    console.log("Rendering Modal");
  }, [show]);

  return (
    <StyledModalContainer show={onShow}>
      <StyledModalContent width={width}>
        <StyledCloseModal onClick={onClose}>&times;</StyledCloseModal>
        {children}
      </StyledModalContent>
    </StyledModalContainer>
  );
};
