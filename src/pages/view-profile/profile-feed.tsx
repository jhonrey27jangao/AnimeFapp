import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  StyledProfileFeed,
  StyledPostImageContainer,
  StyledImageHolder,
} from "./styles";
import * as types from "./types";

export const ProfileFeed: React.FC<types.ProfileFeedProps> = ({ user }) => {
  const posts = useSelector((state: any) => state.profile.posts);
  useEffect(() => {
    console.log("Rendering Profile Feed");
  }, [user, posts]);

  const { userId } = user;
  return (
    <>
      <StyledProfileFeed>
        <StyledPostImageContainer>
          {
            // eslint-disable-next-line array-callback-return
            posts.map((post: any) => {
              if (post.userId === userId)
                return (
                  <StyledImageHolder key={post.postId}>
                    <img src={post.postImage} alt={post.postImage} />
                    <p className="postName">{post.postName}</p>
                    <p className="postDescription">
                      {post.postDescription.substring(0, 35)}...
                    </p>
                    <ul>
                      <li key={0}>
                        <img
                          src={require("../../assets/icons/fap.svg")}
                          alt="faps"
                          title="faps"
                        />
                      </li>
                      <li key={1}>
                        <img
                          src={require("../../assets/icons/messages.svg")}
                          alt="comments"
                          title="comments"
                        />
                      </li>
                    </ul>
                  </StyledImageHolder>
                );
            })
          }
          <p className="noPost">No More Post</p>
        </StyledPostImageContainer>
      </StyledProfileFeed>
    </>
  );
};
