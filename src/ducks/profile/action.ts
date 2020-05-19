import * as types from "./types";

export const getProfileInfo = () => {
  return {
    type: types.GET_PROFILE_INFO,
  };
};

export const addPost = ({
  userId,
  postName,
  postDescription,
  postImage,
}: types.AddPostProps) => {
  return {
    type: types.ADD_POST,
    userId: userId,
    postName: postName,
    postDescription: postDescription,
    postImage: postImage,
  };
};
