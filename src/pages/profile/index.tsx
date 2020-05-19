import React, { useState, useEffect } from "react";
import { ProfileInfo } from "./profile-info";
import { ProfileFeed } from "./profile-feed";
import { ProfileNav } from "./profile-nav";
import { AddPost } from "../common/add-post";
import { useSelector } from "react-redux";

export const ProfileComponent: React.FC = () => {
  /*profile user*/
  const accounts = useSelector((state: any) => state.profile.accounts);
  const profileAccount: any = JSON.parse(localStorage.getItem("Auth") || "{}");
  const userId = accounts.filter(
    (account: any) => account.userId === profileAccount[0].userId
  );
  const user = userId[0];
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    console.log("Rendering Profile");
    return () => {};
  }, [user]);

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
