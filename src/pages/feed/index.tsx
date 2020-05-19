import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FeedAccounts } from "./feed-accounts";
import { FeedProfile } from "./feed-profile";
import { MainFeed } from "./main-feed";
import { StyledMainFeedContainer } from "./styles";
const NewsFeed: React.FC = () => {
  const profileAccount: any = JSON.parse(localStorage.getItem("Auth") || "{}");
  const feedState = useSelector((state: any) => state.newsFeed);
  const accounts = feedState.accounts;
  const posts = feedState.posts;
  const user = profileAccount[0];

  useEffect(() => {
    console.log("Rendering NewsFeed");
  }, [feedState]);

  return (
    <>
      <FeedProfile user={user} />
      <StyledMainFeedContainer>
        <MainFeed posts={posts} accounts={accounts} user={user} />
        <FeedAccounts accounts={accounts} user={user} />
      </StyledMainFeedContainer>
    </>
  );
};

export default NewsFeed;
