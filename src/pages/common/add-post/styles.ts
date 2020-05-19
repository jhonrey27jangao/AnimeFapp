import styled from "styled-components";

export const StyledAddPostContainer = styled.div`
  h3 {
    font-size: 21px;
    color: #7a8fa6;
  }

  input,
  textarea {
    width: 100%;
    border: none;
    background: none;
    font-size: 12px;
    padding: 10px 10px 0;
    outline: none;
  }

  .descriptionInput {
    min-height: 100px;
    max-height: 100px;
    resize: none;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #dedede;
    }
  }

  .titleInput {
    font-size: 21px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  place-content: flex-end;
  padding: 10px 0 0;

  button {
    margin: 0 5px;
  }
`;
