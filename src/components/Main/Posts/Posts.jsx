import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination/Pagination";
import Post from "./Post/Post";
function Posts() {
  const { posts } = useSelector(state => ({
    posts: state.postsReducer.posts
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);

  //set current page

  const paginate = pageNubmer => {
    setCurrentPage(pageNubmer);
  };

  const nextPagesBtnClick = () => {
    setFirstPage(firstPage + 5);
    setLastPage(lastPage + 5);
  };
  const prevPagesBtnClick = () => {
    setFirstPage(firstPage - 5);
    setLastPage(lastPage - 5);
  };

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="posts-section">
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        firstPage={firstPage}
        lastPage={lastPage}
        nextPagesBtnClick={nextPagesBtnClick}
        prevPagesBtnClick={prevPagesBtnClick}
      />
      <ul className="current-posts">
        {currentPosts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
}

export default Posts;
