import React from "react";
import Post from "./Post/Post";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
function Posts({ posts }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = debounce(() => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }, 1000);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
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
