import React from "react";
import Post from "./Post/Post";
import { NavLink } from "react-router-dom";

function Posts({ posts }) {
  return (
    <div className="posts-box">
      {posts.slice(0, 3).map(post => (
        <Post key={post.id} {...post} />
      ))}
      <NavLink className="btn-see-more" to="/myPosts">
        See More
      </NavLink>
    </div>
  );
}

export default Posts;
