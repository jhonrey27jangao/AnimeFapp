import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as types from "./types";
import {
  StyledFeedProfileContainer,
  StyledLogo,
  StyledProfile,
  StyledProfileMenu,
} from "./styles";
import { signOut } from "../../ducks/login/actions";
import { useDispatch } from "react-redux";

export const FeedProfile: React.FC<types.FeedProfileProps> = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const reloadHome = () => {
    window.location.href = "/home";
  };
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { firstName, lastName, profileImg, userId } = user;

  const dispatchSignOut = () => {
    dispatch(
      signOut({
        userId,
      })
    );
    history.replace("/");
  };
  useEffect(() => {});

  return (
    <StyledFeedProfileContainer>
      <StyledLogo onClick={reloadHome}>AnimeFap</StyledLogo>
      <StyledProfile>
        <Link to="/profile">
          <h2>
            <strong>{firstName} </strong>
            {lastName}
          </h2>
        </Link>
        <img
          src={
            profileImg !== ""
              ? profileImg
              : require("../../assets/images/no-image.png")
          }
          alt="Profile"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        />
      </StyledProfile>
      {showProfileMenu && (
        <StyledProfileMenu>
          <li>Settings</li>
          <li>About</li>
          <li onClick={dispatchSignOut}>Sign Out</li>
        </StyledProfileMenu>
      )}
    </StyledFeedProfileContainer>
  );
};
