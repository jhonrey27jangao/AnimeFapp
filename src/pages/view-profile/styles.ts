import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  padding-top: 20px;
  width: 935px;
  background: #f5f5f5;
  z-index: 2;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  width: 60%;
`;

export const StyledProfileImage = styled.div`
  width: 35%;
  max-width: 45%;
  text-align: center;

  & img {
    width: 70%;
    height: 100%;
    border: 4px solid #fff;
    border-radius: 100%;
  }

  & button {
    position: relative;
    top: -16px;
    cursor: pointer;
  }

  & button:hover {
    text-decoration: underline;
  }
`;

export const StyledProfileInfo = styled.div`
  width: 55%;
  padding: 30px 0 0;
  color: #272727;

  h2 {
    margin-bottom: 5px;
    font-size: 21px;
    & strong {
      font-weight: 900;
    }
  }

  h3,
  p {
    color: #7a8fa6;
  }

  h3 {
    margin-bottom: 12px;
  }
`;

export const StyledProfileStatus = styled.div`
  width: 40%;
  max-width: 40%;
  padding: 25px 0 0;

  & .row {
    display: flex;
    padding: 15px;
    border-radius: 10px;
    background: #fff;

    & .col {
      width: 33.3%;
      max-width: 33.3%;
      text-align: center;

      & h2 {
        font-size: 20px;
        font-weight: 900;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }

      & span {
        display: block;
        color: #7a8fa6;
        font-size: 13px;
      }
    }
  }
`;

export const StyledProfileNav = styled.div`
  position: fixed;
  bottom: 0;
  width: 935px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px #dedede;

  & ul {
    display: flex;
    background: transparent;

    & li {
      width: 25%;
      max-width: 25%;
      padding-top: 15px;
      text-align: center;

      &.addPost {
        position: relative;
        top: -30px;
        padding: 30px 0 0;
        border-radius: 100%;
        background: #fff;

        & img {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          line-height: 0;
          box-shadow: 0px 10px 15px #d3d3d3;
        }
      }

      & img {
        width: 30px;
        height: 30px;
        transition: transform 300ms ease-in;
        cursor: pointer;

        :hover {
          transform: scale(1.2);
          transition: transform 300ms ease-in;
        }
      }
    }
  }
`;

export const StyledProfileFeed = styled.div`
  position: absolute;
  top: 195px;
  width: 935px;
`;

export const StyledPostImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px 120px;

  .noPost {
    text-align: center;
    color: #7a8fa6;
    margin-top: 15px;
    width: 100%;
  }
`;

export const StyledImageHolder = styled.div`
  position: relative;
  width: 33.3%;
  max-width: 33%;
  margin: 1px;
  background: #000;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 3px;

  & .postName {
    display: none;
    position: absolute;
    bottom: 30px;
    left: 10px;
    color: #ffff;
    font-size: 14px;
  }

  & .postDescription {
    display: none;
    position: absolute;
    bottom: 5px;
    left: 10px;
    color: #fff;
    font-size: 11px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    .postName {
      display: block;
    }

    .postDescription {
      display: block;
    }

    img {
      opacity: 0.7;
    }
  }

  ul {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    padding: 5px;

    li {
      margin: 0 5px;

      :hover img {
        transform: scale(1.1);
        transition: transform 300ms ease-in;
      }

      img {
        transition: transform 300ms ease-in;
        filter: brightness(5);
      }
    }
  }
`;
