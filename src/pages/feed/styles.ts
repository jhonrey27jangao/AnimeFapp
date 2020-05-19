import styled from "styled-components";

export const StyledFeedProfileContainer = styled.div`
  position: fixed;
  top: 0;
  width: 935px;
  padding: 0 15px;
  border-bottom: 2px solid #d3d3d3;
  background: #fff;
  z-index: 2;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const StyledLogo = styled.h1`
  float: left;
  padding-right: 55px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 32px;
  font-weight: 900;
  color: #272727;
  background: url(https://www.pngkit.com/png/full/419-4195572_kawaii-house-clipart-palmtop-tiger.png)
    top 0px right 0px no-repeat;
  background-size: 50px 50px;
  cursor: pointer;
`;

export const StyledProfile = styled.div`
  float: right;
  display: flex;
  padding: 5px 0;

  h2 {
    padding: 10px 5px;
    font-size: 21px;

    & strong {
      font-weight: bold;
    }
  }
  & img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
    transition: transform 300ms ease-in;

    &:hover {
      transform: scale(1.1);
      transition: transform 300ms ease-in;
    }
  }
`;

export const StyledMainFeedContainer = styled.div`
  display: flex;
  margin-top: 65px;
  padding-top: 20px;
`;

export const StyledMainFeed = styled.div`
  width: 60%;
  max-width: 60%;
`;

export const StyledFeed = styled.div`
  margin-bottom: 10px;
  padding: 10px 0 3px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;

  & .user {
    display: flex;
    position: relative;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;

    & .profileInfo {
      width: 75%;
      max-width: 75%;
      padding: 15px 10px;

      a {
        text-decoration: none;
        color: inherit;

        :hover {
          text-decoration: underline;
        }
      }

      & h3 {
        font-size: 16px;
        margin-bottom: 2px;
      }

      & span {
        color: #7a8fa6;
        font-style: italic;
      }
    }

    & img {
      width: 15%;
      max-width: 15%;
      padding-left: 10px;
      border-radius: 100%;
    }

    & .selection {
      position: absolute;
      top: 5px;
      right: 8px;
      padding: 0 5px;
      cursor: pointer;

      &:hover span {
        transform: scale(1.3);
        transition: transform 300ms ease-in;
      }

      & span {
        display: block;
        width: 5px;
        height: 5px;
        margin-bottom: 3px;
        background: #cecece;
        border-radius: 100%;
        transition: transform 300ms ease-in;
      }
    }
  }

  & .post {
    h3 {
      font-size: 16px;
      padding: 5px 0 0 5px;
    }

    p {
      color: #7a8fa6;
      padding: 3px 5px;
      font-style: italic;
    }
    .image {
      cursor: pointer;
      :hover img {
        opacity: 0.9;
      }
      img {
        width: 100%;
      }
    }
  }

  .postOptions {
    display: flex;
    padding: 5px 5px 0px;
    margin-bottom: 10px;
    li {
      display: grid;
      place-items: center;
      width: 33.3%;
      padding: 10px 5px 0;
      text-align: center;

      span {
        display: block;
        padding-bottom: 2px;
        cursor: pointer;
        color: rgb(142, 142, 142);
      }

      img {
        transition: transform 300ms ease-in;
        filter: brightness(0.5);

        :hover {
          cursor: pointer;
        }
      }

      &:hover img {
        transform: scale(1.1);
        transition: transform 300ms ease-in;
      }
    }
  }

  .postComments {
    border-top: 1px solid #ddd;
    padding: 5px 15px 3px;

    .userComment {
      margin-bottom: 0;

      img {
        width: 40px;
        height: 40px;
      }

      input {
        width: 90%;
        padding: 10px;
        margin-left: 5px;
        border: 1px solid #ddd;
        border-radius: 25px;
        outline: 0;

        :focus {
          border: 2px solid #7a8fa6;
        }
      }
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
      p {
        position: relative;
        a {
          padding-right: 3px;
          color: rgb(142, 142, 142);
          text-decoration: none;

          :hover {
            text-decoration: underline;
          }
        }

        .commentOptions {
          position: absolute;
          right: 15px;
          top: 25%;

          button {
            border: none;
            background: none;
            outline: none;
            cursor: pointer;
            color: rgb(142, 142, 142);

            :hover {
              text-decoration: underline;
            }
          }
        }

        padding: 15px 10px;
        margin-left: 5px;
        width: 90%;
        border-radius: 25px;
        background: rgb(242, 243, 245);
      }
    }
  }
`;

export const StyledFeedOptionListContainer = styled.ul`
  padding: 10px 0 0;

  & li {
    margin-bottom: 5px;
    padding: 10px 0;
    font-size: 16px;
    text-align: center;
    border: 0.5px dotted #dedede;
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;

      :hover {
        text-decoration: underline;
      }
    }
  }

  & .textRed {
    color: rgb(237, 73, 86);
  }

  & li:hover,
  & li:focus {
    background: #dedede;
  }

  & .user {
    img {
      width: 100%;
    }
  }
`;

export const StyledFeedAccountsContainer = styled.div`
  width: 280px;
  max-width: 280px;
  margin: 0 auto;
  padding-top: 10px;
  position: fixed;
  left: 60%;

  & h3 {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 13px;
    color: rgb(142, 142, 142);
  }
`;

export const StyledAccountContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 2px 3px;

  .accountImg {
    width: 20%;
    max-width: 20%;
    height: 40px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  .accountName {
    width: 70%;
    max-width: 70%;
    padding: 5px 0;
    font-size: 120%;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      display: block;
      padding-top: 3px;
      color: #7a8fa6;
      font-size: 11px;
    }
  }
`;

export const StyledProfileMenu = styled.ul`
  width: 250px;
  background: #fff;
  position: absolute;
  top: 65px;
  right: 0;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  li {
    margin-bottom: 3px;
    font-size: 14px;
    color: rgb(142, 142, 142);
    padding: 10px 5px;
    cursor: pointer;
    border: 0.5px dotted #dedede;

    &:hover {
      text-decoration: underline;
      background: #dedede;
    }
  }
`;

export const StyledListUserContainer = styled.ul`
  .user {
    display: flex;
    padding: 10px;
    align-items: center;

    a {
      width: 80%;
      margin: 0 auto;
      font-size: 14px;
      text-decoration: none;
      color: inherit;

      :hover {
        text-decoration: underline;
      }
    }

    .userImg {
      width: 10%;
      max-width: 10%;

      img {
        width: 100%;
        border-radius: 100%;
      }
    }
  }
`;

export const StyledEditComment = styled.div`
  padding: 10px 0;
  input {
    width: 100%;
    padding: 10px;
    margin: 0 0 10px 5px;
    border: 1px solid #ddd;
    border-radius: 25px;
    outline: 0;

    :focus {
      border: 2px solid #7a8fa6;
    }
  }
  button {
    margin: 0 3px;
  }
`;
