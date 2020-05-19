import styled from "styled-components";

export const StyledLoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 285px;
  margin: 0;
  padding: 40px 30px 30px;
  background: #fff;
  color: #97989a;
  border-radius: 25px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 15px 8px 25px #ccc;
  transition: 1s opacity;

  ul {
    padding-left: 0;
  }
`;

export const StyledLogo = styled.div`
  width: 65px;
  height: 70px;
  margin: 0 auto 45px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledSignIn = styled.div`
  width: 215px;
  margin: 0 auto;
`;

export const StyledLinkContainer = styled.div`
  margin-bottom: 15px;
  & ul {
    display: flex;

    & li {
      display: inline-flex;

      &: first-child {
        flex: auto;
      }

      & a {
        text-decoration: none;
        color: #97989a;
        font-size: 16px;
        text-align: center;

        &.forgot-password {
          margin: 0 auto;
        }

        &.active {
          padding-bottom: 3px;
          border-bottom: 1px solid #69dfed;
        }

        &:hover {
          border-bottom: 1px solid #69dfed;
        }
      }
    }
  }
`;

export const StyledInputContainer = styled.div`
  padding: 3px;

  & input {
    display: inline-block;
    width: 99%;
    margin: 0 auto 15px;
    padding: 9px 10px;
    border: none;
    border-radius: 25px;
    background: #f1f1f1;
    color: #97989a;
    outline: none;
    box-sizing: border-box;

    & :focus {
      border-radius: 25px;
    }
  }
`;

export const StyledShowPassword = styled.div`
  margin-bottom: 5px;

  & input {
    &[type="checkbox"] {
      float: right;
      position: absolute;
      left: 0;
      margin: 2px 0 0 -85px;
      text-align: left;
      outline: none;
    }
  }
  & label {
    position: relative;
    left: 50px;
  }
`;

export const StyledButtonContainer = styled.button`
  width: 100%;
  margin-bottom: 30px;
  padding: 9px 0;
  border: none;
  border-radius: 25px;
  background: #6edbef;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledErrorMessage = styled.div`
  display: block;
  margin-bottom: 3px;
  padding: 0;
  color: #ff0000;
  font-size: 13px;
`;
