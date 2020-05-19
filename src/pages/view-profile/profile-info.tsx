import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as types from "./types";
import { FollowersModal, FollowingModal } from "../profile/profile-modals";
import {
  StyledMainContainer,
  StyledProfileContainer,
  StyledProfileImage,
  StyledProfileInfo,
  StyledProfileStatus,
} from "./styles";

export const ProfileInfo: React.FC<types.ProfileInfoProps> = ({ user }) => {
  const posts = useSelector((state: any) => state.newsFeed.posts);
  let totalPosts: any = [];

  const [showFollowers, setShowFollowers] = useState({
    followers: [],
    showModal: false,
  });

  const [showFollowing, setShowFollowing] = useState({
    following: [],
    showModal: false,
  });

  useEffect(() => {
    console.log("rendering Profile Info");
  }, [user]);

  const {
    profileImg,
    firstName,
    lastName,
    address,
    description,
    followers,
    following,
  } = user;

  return (
    <>
      <StyledMainContainer>
        <StyledProfileContainer>
          <StyledProfileImage>
            <img
              src={
                profileImg !== ""
                  ? profileImg
                  : require("../../assets/images/no-image.png")
              }
              alt={profileImg}
            />
          </StyledProfileImage>
          <StyledProfileInfo>
            <h2>
              <strong>{`${firstName} `}</strong>
              {lastName}
            </h2>
            <div>
              <h3>{address}</h3>
              <p>{description}</p>
            </div>
          </StyledProfileInfo>
        </StyledProfileContainer>
        <StyledProfileStatus>
          <div className="row">
            <div className="col">
              <h2>
                {
                  // eslint-disable-next-line array-callback-return
                  (posts.map((post: any) => {
                    if (post.userId === user.userId) {
                      totalPosts.push({ post });
                    }
                  }),
                  totalPosts.length)
                }
              </h2>
              <span>Posts</span>
            </div>
            <div className="col">
              <h2
                onClick={() =>
                  setShowFollowers({
                    showModal: true,
                    followers: followers,
                  })
                }
              >
                {followers.length}
              </h2>
              <span>Followers</span>
            </div>
            <div className="col">
              <h2
                onClick={() =>
                  setShowFollowing({
                    following: following,
                    showModal: true,
                  })
                }
              >
                {following.length}
              </h2>
              <span>Following</span>
            </div>
          </div>
        </StyledProfileStatus>
      </StyledMainContainer>
      {showFollowers.showModal && (
        <FollowersModal
          followers={showFollowers.followers}
          showFollowers={showFollowers.showModal}
          setShowFollowers={() =>
            setShowFollowers({
              showModal: false,
              followers: [],
            })
          }
        />
      )}
      {showFollowing.showModal && (
        <FollowingModal
          following={showFollowing.following}
          showFollowing={showFollowing.showModal}
          setShowFollowing={() =>
            setShowFollowing({
              showModal: false,
              following: [],
            })
          }
        />
      )}
    </>
  );
};
