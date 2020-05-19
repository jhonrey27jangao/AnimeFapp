import React from "react";
import {
  StyledViewPostContainer,
  StyledPostContainer,
  StyledPostReactionsContainer,
} from "./styles";
import { useSelector } from "react-redux";
import { FeedProfile } from "../../feed/feed-profile";
import { Link } from "react-router-dom";
export const ViewPost = (props: any) => {
  const profileAccount: any = JSON.parse(localStorage.getItem("Auth") || "{}");
  const user = profileAccount[0];
  const feedState = useSelector((state: any) => state.newsFeed);
  const posts = feedState.posts;
  const accounts = feedState.accounts;
  const selectedPostId = props.match.params.postId;
  return (
    <>
      <FeedProfile user={user} />
      <StyledViewPostContainer>
        {
          // eslint-disable-next-line array-callback-return
          posts.map((post: any) => {
            if (post.postId === selectedPostId) {
              return (
                <React.Fragment key={post.postId}>
                  <StyledPostContainer>
                    <React.Fragment key={post.postId}>
                      <div className="post">
                        {
                          // eslint-disable-next-line array-callback-return
                          accounts.map((account: any) => {
                            if (account.userId === post.userId) {
                              return (
                                <React.Fragment key={account.userId}>
                                  <div className="user">
                                    <div className="userInfo">
                                      <img
                                        src={account.profileImg}
                                        alt={account.profileImg}
                                      />
                                      <div className="des">
                                        <h2>
                                          Posted by:{" "}
                                          <strong>
                                            {account.firstName +
                                              " " +
                                              account.lastName}
                                          </strong>
                                        </h2>

                                        <p>{account.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="userPost">
                                    <h3>{post.postName}</h3>
                                    <p>{post.postDescription}</p>
                                    <div className="image">
                                      <img
                                        src={post.postImage}
                                        alt={post.postImage}
                                      />
                                    </div>
                                  </div>
                                </React.Fragment>
                              );
                            }
                          })
                        }
                      </div>
                    </React.Fragment>
                  </StyledPostContainer>
                  <StyledPostReactionsContainer>
                    <h3>Faps:</h3>
                    <ul className="faps">
                      {post.faps.map((fap: any) => (
                        <li key={fap.userId}>
                          {
                            // eslint-disable-next-line array-callback-return
                            accounts.map((account: any) => {
                              if (account.userId === fap.userId) {
                                return (
                                  <React.Fragment key={account.userId}>
                                    <img src={account.profileImg} alt="" />
                                    <Link
                                      to={`/view-profile/${account.userId}`}
                                    >
                                      {account.firstName +
                                        " " +
                                        account.lastName}
                                    </Link>
                                  </React.Fragment>
                                );
                              }
                            })
                          }
                        </li>
                      ))}
                    </ul>

                    <h3>Comments:</h3>
                    <ul className="comments">
                      {post.comments.map((comment: any) => (
                        <li key={comment.userId}>
                          {
                            // eslint-disable-next-line array-callback-return
                            accounts.map((account: any) => {
                              if (account.userId === comment.userId) {
                                return (
                                  <React.Fragment key={account.userId}>
                                    <Link
                                      to={`/view-profile/${account.userId}`}
                                    >
                                      <img src={account.profileImg} alt="" />
                                    </Link>
                                    <p>{comment.comment}</p>
                                  </React.Fragment>
                                );
                              }
                            })
                          }
                        </li>
                      ))}
                    </ul>
                  </StyledPostReactionsContainer>
                </React.Fragment>
              );
            }
          })
        }
      </StyledViewPostContainer>
    </>
  );
};
