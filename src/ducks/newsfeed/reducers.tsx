import * as types from "./types";
import uuid from "uuid/v4";
import { initialState } from "../state";

export const newsFeedReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.UNLIKE_POST:
      const toBeUnlike = state.posts.filter(
        (post: any) => post.postId === action.postId
      );
      toBeUnlike[0].faps = toBeUnlike[0].faps.filter(
        (fap: any) => fap.userId !== action.userId
      );
      state = {
        ...state,
      };
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.LIKE_POST:
      const toBeModified = state.posts.filter(
        (post: any) => post.postId === action.postId
      );
      toBeModified[0].faps = [
        ...toBeModified[0].faps,
        {
          userId: action.userId,
        },
      ];
      state = {
        ...state,
      };
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.FOLLOW_ACCOUNT:
      const toBeFollow = state.accounts.filter(
        (account: any) => account.userId === action.accountId
      );

      const toBeFollowing = state.accounts.filter(
        (account: any) => account.userId === action.userId
      );

      toBeFollow[0].followers = [
        ...toBeFollow[0].followers,
        {
          userId: action.userId,
        },
      ];

      toBeFollowing[0].following = [
        ...toBeFollowing[0].following,
        {
          userId: action.accountId,
        },
      ];
      state = {
        ...state,
      };
      console.log(state, "state");
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.UNFOLLOW_ACCOUNT:
      const toBeUnfollow = state.accounts.filter(
        (account: any) => account.userId === action.accountId
      );

      const toBeUnfollowing = state.accounts.filter(
        (account: any) => account.userId === action.userId
      );

      toBeUnfollowing[0].following = toBeUnfollowing[0].following.filter(
        (follow: any) => follow.userId !== action.accountId
      );

      toBeUnfollow[0].followers = toBeUnfollow[0].followers.filter(
        (follow: any) => follow.userId !== action.userId
      );
      state = {
        ...state,
      };
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.ADD_COMMENT:
      const toBeComment = state.posts.filter(
        (post: any) => post.postId === action.postId
      );
      toBeComment[0].comments = [
        ...toBeComment[0].comments,
        {
          commentId: uuid(),
          userId: action.userId,
          comment: action.comment,
        },
      ];
      state = {
        ...state,
      };
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.DELETE_COMMENT:
      const toBeDeleteComment = state.posts.filter(
        (post: any) => post.postId === action.postId
      );
      toBeDeleteComment[0].comments = toBeDeleteComment[0].comments.filter(
        (comment: any) => comment.commentId !== action.commentId
      );
      state = {
        ...state,
      };
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.UPDATE_COMMENT:
      const toBeUpdateComment = state.posts.filter(
        (post: any) => post.postId === action.postId
      );

      const comment = toBeUpdateComment[0].comments.filter(
        (comment: any) => comment.commentId === action.commentId
      );
      comment[0].comment = action.comment;
      state = {
        ...state,
      };
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
