import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination/Pagination";
import Post from "./Post/Post";
function Posts() {
  const { posts } = useSelector((state) => ({
    posts: state.posts.posts,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);

  //-----pages portion-----
  const pagesPerPortion = 5;
  const pages = Math.ceil(posts.length / postsPerPage);
  //-----pages portion END-----

  const paginate = (pageNubmer) => {
    setCurrentPage(pageNubmer);
  };

  const nextPagesBtnClick = () => {
    setFirstPage(firstPage + pagesPerPortion);
    setLastPage(lastPage + pagesPerPortion);
  };
  const prevPagesBtnClick = () => {
    setFirstPage(firstPage - pagesPerPortion);
    setLastPage(lastPage - pagesPerPortion);
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
        pages={pages}
        totalPosts={posts.length}
        firstPage={firstPage}
        lastPage={lastPage}
        nextPagesBtnClick={nextPagesBtnClick}
        prevPagesBtnClick={prevPagesBtnClick}
      />
      <ul className="current-posts">
        {currentPosts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
}

export default Posts;
