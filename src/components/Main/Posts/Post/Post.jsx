import React from "react";
import userImg from "./../../Home/userImg.jpg";
function Post({ post }) {
  return (
    <li className="user">
      <img src={userImg} alt="user" />
      <div className="user-info">
        <h3>Post {post.id}</h3>
        <span>{post.title}</span>
        <p>{post.body}</p>
      </div>
    </li>
  );
}

export default Post;
