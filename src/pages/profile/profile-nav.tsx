import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as types from "./types";
import { StyledProfileNav } from "./styles";

export const ProfileNav: React.FC<types.ProfileNavProps> = ({
  handleAddPost,
}) => {
  useEffect(() => {
    console.log("Rendering Profile Nav");
  });
  return (
    <>
      <StyledProfileNav>
        <ul>
          <li>
            <Link to="/home">
              <img src={require("../../assets/icons/home.svg")} alt="home" />
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <img
                src={require("../../assets/icons/messages.svg")}
                alt="messages"
              />
            </Link>
          </li>
          <li className="addPost" onClick={handleAddPost}>
            <img
              src={require("../../assets/icons/add-post.svg")}
              alt="add post"
            />
          </li>
          <li>
            <img
              src={require("../../assets/icons/notifications.svg")}
              alt="notification"
            />
          </li>
          <li>
            <Link to="/profile">
              <img
                src={require("../../assets/icons/profile.svg")}
                alt="profile"
              />
            </Link>
          </li>
        </ul>
      </StyledProfileNav>
    </>
  );
};
