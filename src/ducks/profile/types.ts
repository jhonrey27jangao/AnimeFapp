export const GET_PROFILE_INFO = "GET_PROFILE_INFO";
export const ADD_POST = "ADD_POST";

export type AddPostProps = {
  userId: string;
  postName: string;
  postDescription: string;
  postImage: string;
};
