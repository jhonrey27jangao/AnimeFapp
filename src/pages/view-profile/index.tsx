import React, { useState, useEffect } from "react";
import { ProfileInfo } from "./profile-info";
import { ProfileFeed } from "./profile-feed";
import { ProfileNav } from "./profile-nav";
import { AddPost } from "../common/add-post";
import { useSelector } from "react-redux";

export const ViewProfileComponent: React.FC = (props: any) => {
  const accounts = useSelector((state: any) => state.profile.accounts);
  const getUser = accounts.filter(
    // eslint-disable-next-line eqeqeq
    (account: any) => account.userId == props.match.params.id
  );
  const user = getUser[0];
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    console.log("Rendering Profile");
    return () => {};
  }, [user, props]);

  return (
    <>
      <ProfileInfo user={user} />
      <ProfileFeed user={user} />
      <ProfileNav handleAddPost={() => setShowAddPost(true)} />
      {showAddPost && (
        <AddPost
          showOptions={showAddPost}
          setShowOptions={() => setShowAddPost(false)}
        />
      )}
    </>
  );
};
