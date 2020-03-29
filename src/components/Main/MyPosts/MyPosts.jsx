import React from "react";
import { useSelector } from "react-redux";

function MyPosts() {
  const { posts } = useSelector(state => ({
    posts: state.postsReducer.posts
  }));
  console.log(posts);
  return (
    <div>
      {posts.map(post => (
        <h2 key={post.id}>{post.body}</h2>
      ))}
    </div>
  );
}

export default MyPosts;
