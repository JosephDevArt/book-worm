import React, { useState } from "react";
import userImg from "../../userImg.jpg";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { followUser } from "../../../../../actions/homeActions";
import { unfollowUser } from "./../../../../../actions/homeActions";
function User({ id, name, username, catchPhrase }) {
  const { followingUsers, isAuthorized } = useSelector(state => ({
    followingUsers: state.homeReducer.followingUsers,
    isAuthorized: state.userReducer.isAuthorized
  }));
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const followBtnClick = () => {
    dispatch(followUser(id));
  };

  const unfollowBtnClick = () => {
    dispatch(unfollowUser(id));
  };

  const buttonClick = () => {
    //add warning ('log in to follow') if not Authorized and clicked on Follow btn
    setActive(true);
  };
  return (
    <div className="user">
      <img src={userImg} />
      <div className="user-info">
        <h3>{name}</h3>
        <span>{username}</span>
        <p>{catchPhrase}</p>
      </div>
      {followingUsers.some(user => user.name == name) ? (
        <button className="btn-unfollow btn" onClick={unfollowBtnClick}>
          Unfollow
        </button>
      ) : (
        <button
          className={`btn-follow btn ${
            //add warning ('log in to follow') if not Authorized and clicked on Follow btn
            isAuthorized ? null : active ? "log-in-warning" : null
          }`}
          onClick={isAuthorized ? followBtnClick : buttonClick}
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default User;
