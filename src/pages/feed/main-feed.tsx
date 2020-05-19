import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StyledMainFeed, StyledFeed } from "./styles";
import {
  FeedOptionsModal,
  FeedFapsModal,
  FeedEditCommentModal,
} from "./feed-modals";
import * as types from "./types";
import {
  likePost,
  unLikePost,
  addComment,
  deleteComment,
} from "../../ducks/newsfeed/actions";

export const MainFeed: React.FC<types.MainFeedProps> = ({
  posts,
  accounts,
  user,
}) => {
  const dispatch = useDispatch();
  const [userComment, setUsercComment] = useState("");
  const [showOptions, setShowOptions] = useState({
    postId: "",
    showModal: false,
  });
  const [editCommentModal, setEditCommentModal] = useState({
    commentInfo: [{ commentId: "", comment: "", postId: "", userId: "" }],
    showModal: false,
  });

  const [showFaps, setShowFaps] = useState({
    users: [],
    showMdal: false,
  });

  const viewFaps = (post: any) => {
    console.log(post);
    setShowFaps({
      users: post,
      showMdal: true,
    });
  };

  const dispatchFap = (postId: any) => {
    const data = {
      postId: postId,
      userId: user.userId,
    };
    dispatch(likePost(data));
  };

  const dispatchUnFap = (postId: any) => {
    const data = {
      postId: postId,
      userId: user.userId,
    };
    dispatch(unLikePost(data));
  };

  const checkIfLiked = (faps: any) => {
    const Liked = faps.filter((fap: any) => fap.userId === user.userId);
    if (Liked.length === 0) return false;
    return true;
  };

  const dispatchAddComment = (post: any) => {
    const data = {
      comment: userComment,
      userId: user.userId,
      postId: post.postId,
    };
    dispatch(addComment(data));
    setUsercComment("");
  };

  const dispatchEditComment = ({ comment, post, user }: any) => {
    setEditCommentModal({
      commentInfo: [
        {
          comment: comment.comment,
          commentId: comment.commentId,
          postId: post.postId,
          userId: user.userId,
        },
      ],
      showModal: true,
    });
  };

  const dispatchDeleteComment = ({ comment, post }: any) => {
    const data = {
      commentId: comment.commentId,
      postId: post.postId,
    };
    dispatch(deleteComment(data));
  };

  useEffect(() => {
    return () => {};
  }, [posts]);

  return (
    <>
      <StyledMainFeed>
        {posts.map((post: any) => (
          <StyledFeed key={post.postId}>
            {
              // eslint-disable-next-line array-callback-return
              accounts.map((account: any) => {
                if (account.userId === post.userId)
                  return (
                    <div className="user" key={account.userId}>
                      <img src={account.profileImg} alt={account.profileImg} />
                      <div className="profileInfo">
                        <Link
                          to={
                            user.userId !== account.userId
                              ? `/view-profile/${account.userId}`
                              : `/profile`
                          }
                        >
                          <h3>{account.firstName + " " + account.lastName}</h3>
                        </Link>
                        <span>{account.description}</span>
                      </div>
                      <div
                        className="selection"
                        onClick={() =>
                          setShowOptions({
                            showModal: true,
                            postId: post.postId,
                          })
                        }
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  );
              })
            }
            <div className="post">
              <h3>{post.postName}</h3>
              <p>{post.postDescription}</p>
              <div className="image">
                <img src={post.postImage} alt={post.postImage} />
              </div>
            </div>
            <ul className="postOptions">
              <li>
                <span className="fapInfo" onClick={() => viewFaps(post.faps)}>
                  {post.faps.length}
                </span>
                {checkIfLiked(post.faps) === true ? (
                  <img
                    src={require("../../assets/icons/fap.svg")}
                    alt="heart-fap"
                    style={{
                      filter: "brightness(1)",
                    }}
                    onClick={() => dispatchUnFap(post.postId)}
                  />
                ) : (
                  <img
                    src={require("../../assets/icons/heart-fap.svg")}
                    alt="heart-fap"
                    onClick={() => dispatchFap(post.postId)}
                  />
                )}
              </li>
              <li>
                <span className="fapInfo">{post.comments.length}</span>
                <img
                  src={require("../../assets/icons/comment-fap.svg")}
                  alt="comment-fap"
                />
              </li>
              <li>
                <img
                  src={require("../../assets/icons/share-fap.svg")}
                  alt="share-fap"
                />
              </li>
            </ul>
            <ul className="postComments">
              {post.comments.map((comment: any, index: any) => (
                <li key={index}>
                  {
                    // eslint-disable-next-line array-callback-return
                    accounts.map((account: any) => {
                      if (account.userId === comment.userId) {
                        return (
                          <React.Fragment key={comment.commentId}>
                            <img
                              src={account.profileImg}
                              alt={account.profileImg}
                            />
                            <p>
                              <Link
                                to={
                                  user.userId !== account.userId
                                    ? `/view-profile/${account.userId}`
                                    : `/profile`
                                }
                              >
                                {account.firstName + " " + account.lastName}
                              </Link>
                              {comment.comment}
                              {user.userId === account.userId && (
                                <span className="commentOptions">
                                  <button
                                    onClick={() =>
                                      dispatchEditComment({
                                        comment,
                                        post,
                                        user,
                                      })
                                    }
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() =>
                                      dispatchDeleteComment({ comment, post })
                                    }
                                  >
                                    Delete
                                  </button>
                                </span>
                              )}
                            </p>
                          </React.Fragment>
                        );
                      }
                    })
                  }
                  <div
                    className="selection"
                    onClick={() =>
                      setShowOptions({
                        postId: post.postId,
                        showModal: true,
                      })
                    }
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </li>
              ))}
              <li className="userComment">
                <img src={user.profileImg} alt="" />
                <input
                  value={userComment}
                  type="text"
                  onChange={(e: any) => setUsercComment(e.currentTarget.value)}
                  placeholder="Add a comment.."
                  onKeyPress={(event) =>
                    event.key === "Enter" ? dispatchAddComment(post) : ""
                  }
                />
              </li>
            </ul>
          </StyledFeed>
        ))}
      </StyledMainFeed>
      {showOptions.showModal && (
        <FeedOptionsModal
          showOptions={showOptions}
          setShowOptions={() =>
            setShowOptions({
              postId: "",
              showModal: false,
            })
          }
        />
      )}
      {showFaps.showMdal && (
        <FeedFapsModal
          faps={showFaps.users}
          showFaps={showFaps.showMdal}
          setShowFaps={() =>
            setShowFaps({
              showMdal: false,
              users: [],
            })
          }
        />
      )}
      {editCommentModal.showModal && (
        <FeedEditCommentModal
          commentInfo={editCommentModal.commentInfo}
          showEditComment={editCommentModal}
          setShowEditCommentModal={() =>
            setEditCommentModal({
              commentInfo: [
                {
                  comment: "",
                  commentId: "",
                  postId: "",
                  userId: "",
                },
              ],
              showModal: false,
            })
          }
        />
      )}
    </>
  );
};
