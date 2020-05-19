import React from "react";
import { Modal } from "../../components/modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyledFollowersContainer } from "./styles";

export const FollowersModal = ({
  showFollowers,
  setShowFollowers,
  followers,
}: any) => {
  const accounts = useSelector((state: any) => state.profile.accounts);

  return (
    <Modal show={showFollowers} onClose={setShowFollowers}>
      <h2>Followers:</h2>
      <StyledFollowersContainer>
        {followers.map((follower: any) => (
          <li key={follower}>
            {
              // eslint-disable-next-line array-callback-return
              accounts.map((account: any) => {
                if (follower.userId === account.userId) {
                  return (
                    <React.Fragment key={follower.userId}>
                      <img src={account.profileImg} alt="" />
                      <Link to={`view-profile/${account.userId}`}>
                        {account.firstName + " " + account.lastName}
                      </Link>
                    </React.Fragment>
                  );
                }
              })
            }
          </li>
        ))}
      </StyledFollowersContainer>
    </Modal>
  );
};

export const FollowingModal = ({
  showFollowing,
  setShowFollowing,
  following,
}: any) => {
  const accounts = useSelector((state: any) => state.profile.accounts);

  return (
    <Modal show={showFollowing} onClose={setShowFollowing}>
      <h2>Following:</h2>
      <StyledFollowersContainer>
        {following.map((follower: any) => (
          <li key={follower}>
            {
              // eslint-disable-next-line array-callback-return
              accounts.map((account: any) => {
                if (follower.userId === account.userId) {
                  return (
                    <React.Fragment key={account.userId}>
                      <img src={account.profileImg} alt="" />
                      <Link to={`view-profile/${account.userId}`}>
                        {account.firstName + " " + account.lastName}
                      </Link>
                    </React.Fragment>
                  );
                }
              })
            }
          </li>
        ))}
      </StyledFollowersContainer>
    </Modal>
  );
};
