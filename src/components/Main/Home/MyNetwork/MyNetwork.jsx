import React from "react";

function MyNetwork({ followingUsers, posts }) {
  return (
    <div className="my-network">
      <div>
        <span>0</span>
        <p>followers</p>
      </div>
      <div>
        <span>{followingUsers.length}</span>
        <p>following</p>
      </div>
      <div>
        <span>{posts.length}</span>
        <p>posts</p>
      </div>
    </div>
  );
}

export default MyNetwork;
