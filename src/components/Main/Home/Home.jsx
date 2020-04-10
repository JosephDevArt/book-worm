import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import Users from "./Users/Users";
import Posts from "./Posts/Posts";
import WeHave from "./WeHave/WeHave";
import BookWorm from "./BookWorm/BookWorm";
import MyNetwork from "./MyNetwork/MyNetwork";
import SendReview from "./SendReview/SendReview";

const Home = () => {
  const { users, followingUsers, posts } = useSelector(
    (state) => ({
      users: state.home.users,
      followingUsers: state.home.followingUsers,
      posts: state.posts.posts,
    }),
    shallowEqual
  );

  return (
    <section className="home-section">
      <WeHave />
      <BookWorm />
      <Users users={users} followingUsers={followingUsers} />
      <MyNetwork followingUsers={followingUsers} posts={posts} />
      <div className="posts-and-send">
        <Posts posts={posts} />
        <SendReview />
      </div>
    </section>
  );
};

export default Home;
