import * as types from "./types";

export const likePost = ({ postId, userId }: any) => {
  return {
    type: types.LIKE_POST,
    postId: postId,
    userId: userId,
  };
};

export const unLikePost = ({ postId, userId }: any) => {
  return {
    type: types.UNLIKE_POST,
    postId: postId,
    userId: userId,
  };
};

export const followAccount = ({ accountId, userId }: any) => {
  return {
    type: types.FOLLOW_ACCOUNT,
    accountId: accountId,
    userId: userId,
  };
};

export const unfollowAccount = ({ accountId, userId }: any) => {
  return {
    type: types.UNFOLLOW_ACCOUNT,
    accountId: accountId,
    userId: userId,
  };
};

export const addComment = ({ userId, comment, postId }: any) => {
  return {
    type: types.ADD_COMMENT,
    comment: comment,
    userId: userId,
    postId: postId,
  };
};

export const deleteComment = ({ commentId, postId }: any) => {
  return {
    type: types.DELETE_COMMENT,
    commentId,
    postId,
  };
};

export const updateComment = ({ commentId, postId, comment, userId }: any) => {
  return {
    type: types.UPDATE_COMMENT,
    commentId,
    postId,
    comment,
    userId,
  };
};

export const reportPost = ({ postId, userId }: any) => {
  return {
    type: types.REPORT_POST,
    userId: userId,
    postId: postId,
  };
};

export const savePost = ({ postId, userId }: any) => {
  return {
    type: types.SAVE_POST,
    userId: userId,
    postId: postId,
  };
};
