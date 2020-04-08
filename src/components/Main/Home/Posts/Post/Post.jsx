import React from "react";
import userImg from "../../userImg.jpg";

function Post({ userId, body, title, id }) {
  return (
    <div className="user-and-info">
      <img src={userImg} />
      <div className="info">
        <h4>Post {id}</h4>
        <span>{title.slice(0, 20)}</span>
        <p>{body.slice(0, 60)}...</p>
      </div>
    </div>
  );
}

export default Post;
