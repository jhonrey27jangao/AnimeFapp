import * as types from "./types";
import { initialState } from "../state";
import uuid from "uuid/v4";

export const feedReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PROFILE_INFO:
      console.log("GETTING PROFILE INFO");
      return state;
    case types.ADD_POST:
      state = {
        ...state,
        posts: [
          ...state.posts,
          {
            userId: action.userId,
            postId: uuid(),
            postName: action.postName,
            postDescription: action.postDescription,
            postImage: action.postImage,
          },
        ],
      };
      console.log(state);
      return state;
    default:
      return state;
  }
};
