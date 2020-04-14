import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";

import Post from "./Post/Post";

function Posts({ posts }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = debounce(() => {
    setScreenWidth(window.innerWidth);
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      handleResize.cancel(); //cancel debounce
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="posts-box">
      {/*load more posts on smaller screens*/}
      {posts.slice(0, screenWidth <= 1024 ? 5 : 3).map((post) => (
        <Post key={post.id} {...post} />
      ))}
      <NavLink className="btn-see-more" to="/Posts">
        See More
      </NavLink>
    </div>
  );
}

export default Posts;
