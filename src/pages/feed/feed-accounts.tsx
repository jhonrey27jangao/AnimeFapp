import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as types from "./types";
import { followAccount, unfollowAccount } from "../../ducks/newsfeed/actions";
import { StyledFeedAccountsContainer, StyledAccountContainer } from "./styles";
import { Button } from "../../components/buttons/";

export const FeedAccounts: React.FC<types.FeedAccountsProps> = ({
  accounts,
  user,
}) => {
  const dispatch = useDispatch();

  const dispatchUnfollowAccount = (accountId: string) => {
    const data = {
      accountId: accountId,
      userId: user.userId,
    };
    dispatch(unfollowAccount(data));
  };

  const dispatchFollowAccount = (accountId: string) => {
    const data = {
      accountId: accountId,
      userId: user.userId,
    };
    dispatch(followAccount(data));
  };

  const checkIfFollow = (followers: any) => {
    const Followed = followers.filter(
      (follow: any) => follow.userId === user.userId
    );
    if (Followed.length === 0) return false;
    return true;
  };

  return (
    <StyledFeedAccountsContainer>
      <h3>Ani-mates you probably know.</h3>
      {
        // eslint-disable-next-line array-callback-return
        accounts.map((account: any) => {
          if (account.userId !== user.userId)
            return (
              <StyledAccountContainer key={account.userId}>
                <div className="accountImg">
                  <img
                    src={
                      account.profileImg !== ""
                        ? account.profileImg
                        : require("../../assets/images/no-image.png")
                    }
                    alt={account.profileImg}
                  />
                </div>
                <div className="accountName">
                  <Link to={`/view-profile/${account.userId}`}>
                    {account.firstName + " " + account.lastName}
                  </Link>
                  <span>Follows you</span>
                </div>
                <div className="followButton">
                  {checkIfFollow(account.followers) === true ? (
                    <Button
                      theme="warning"
                      onClick={() => dispatchUnfollowAccount(account.userId)}
                    >
                      Unfollow
                    </Button>
                  ) : (
                    <Button
                      onClick={() => dispatchFollowAccount(account.userId)}
                      theme="default"
                    >
                      Follow
                    </Button>
                  )}
                </div>
              </StyledAccountContainer>
            );
        })
      }
    </StyledFeedAccountsContainer>
  );
};
