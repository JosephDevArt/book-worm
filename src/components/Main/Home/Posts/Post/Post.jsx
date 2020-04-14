import React from "react";
import userImg from "../../userImg.jpg";

function Post({ body, title, id }) {
  return (
    <div className="post">
      <img src={userImg} alt="post" />
      <div className="info">
        <h4>Post {id}</h4>
        <span>{title.slice(0, 20)}</span>
        <p>{body.slice(0, 50)}...</p>
      </div>
    </div>
  );
}

export default Post;
