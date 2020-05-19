import styled from "styled-components";

export const StyledViewPostContainer = styled.div`
  display: flex;
  margin-top: 90px;
`;

export const StyledPostContainer = styled.div`
  width: 60%;
  margin-bottom: 10px;
  padding: 10px 0 5px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;

  .post {
    .user {
      padding: 0 10px 15px;
      border-bottom: 1px solid #ddd;

      h2 {
        font-size: 16px;
        margin-bottom: 10px;

        strong {
          font-weight: 900;
        }
      }

      .userInfo {
        display: flex;
        align-items: center;

        img {
          width: 50px;
          max-width: 50px;
          border-radius: 100%;
          margin-right: 20px;
        }

        p {
          font-size: 12px;
          color: rgb(142, 142, 142);
        }
      }
    }
    .userPost {
      overflow: hidden;
      h3 {
        font-size: 21px;
        font-weight: 900;
        padding: 10px 0 5px 10px;
      }

      p {
        font-size: 13px;
        color: rgb(142, 142, 142);
        padding-left: 10px;
        padding-bottom: 5px;
      }

      img {
        width: 100%;
        opacity: 1;
        transition: opacity 300ms ease-in;
        transition: transform 300ms ease-in;
        cursor: pointer;

        :hover {
          opacity: 0.9;
          transform: scale(1.01);
          transition: opacity 300ms ease-in;
          transition: transform 300ms ease-in;
        }
      }
    }
  }
`;

export const StyledPostReactionsContainer = styled.div`
  width: 30%;
  max-width 30%;
  margin: 0 auto;

  h3 {
    margin-bottom: 5px;
  }

  .faps {
    margin-bottom: 15px; 
    li {
      display: flex;
      align-items: center;
      margin-bottom: 3px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: rgb(142,142,142);

        :hover {
         text-decoration: underline;
       }
      }
    }
  }

  .comments {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 3px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 10px;
      }
    }

    p {
      padding: 10px;
      background: #fff;
      border-radius: 25px;
    }
  }
`;
