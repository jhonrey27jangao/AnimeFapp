import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledFeedOptionListContainer,
  StyledListUserContainer,
  StyledEditComment,
} from "./styles";
import { Modal } from "../../components/modal";
import { Button } from "../../components/buttons";
import { updateComment } from "../../ducks/newsfeed/actions";

export const FeedOptionsModal = ({ showOptions, setShowOptions }: any) => {
  const renderFeedOptionsModal = useCallback(() => {
    return (
      <Modal show={showOptions.showModal} onClose={setShowOptions}>
        <StyledFeedOptionListContainer>
          <li>
            <Link to={`/view-post/${showOptions.postId}`}>View Post</Link>
          </li>
          <li>Save Post</li>
          <li className="textRed">Report Post</li>
          <li className="textRed">Cancel</li>
        </StyledFeedOptionListContainer>
      </Modal>
    );
  }, [showOptions, setShowOptions]);
  return <>{renderFeedOptionsModal()}</>;
};

export const FeedFapsModal = ({ showFaps, setShowFaps, faps }: any) => {
  const accounts = useSelector((state: any) => state.newsFeed.accounts);
  return (
    <Modal show={showFaps} onClose={setShowFaps}>
      {faps.length === 0 ? (
        <p
          style={{
            textAlign: "center",
          }}
        >
          No faps
        </p>
      ) : (
        <>
          <h3>All</h3>
          <StyledListUserContainer>
            {
              // eslint-disable-next-line array-callback-return
              faps.map((fap: any, index: any) => {
                // eslint-disable-next-line array-callback-return
                const userFaps = accounts.filter(
                  (account: any) => account.userId === fap.userId
                );
                const { userId, profileImg, firstName, lastName } = userFaps[0];
                return (
                  <li className="user" key={userId}>
                    <div className="userImg">
                      <img src={profileImg} alt="Profile" />
                    </div>
                    <Link to={`view-profile/${userId}`}>
                      {firstName + " " + lastName}
                    </Link>
                  </li>
                );
              })
            }
          </StyledListUserContainer>
        </>
      )}
    </Modal>
  );
};

export const FeedEditCommentModal = ({
  showEditComment,
  setShowEditCommentModal,
  commentInfo,
}: any) => {
  const [updatedComment, setUpdatedComment] = useState(commentInfo[0].comment);
  const dispatch = useDispatch();

  const dispatchEditComment = () => {
    if (updatedComment !== "") {
      const data = {
        postId: commentInfo[0].postId,
        commentId: commentInfo[0].commentId,
        comment: updatedComment,
        userId: commentInfo[0].userId,
      };
      dispatch(updateComment(data));
      setShowEditCommentModal({
        commentInfo: [],
        showModal: false,
      });
    }
  };

  return (
    <Modal show={showEditComment} onClose={setShowEditCommentModal}>
      <StyledEditComment>
        <input
          type="text"
          value={updatedComment}
          onChange={(e) => setUpdatedComment(e.currentTarget.value)}
          placeholder="Edit your comment here"
        />
        <Button
          theme="warning"
          onClick={() =>
            setShowEditCommentModal({ commentInfo: [], showModal: false })
          }
        >
          Cancel
        </Button>
        <Button theme="default" onClick={() => dispatchEditComment()}>
          Update
        </Button>
      </StyledEditComment>
    </Modal>
  );
};
