import React, { useState } from "react";
import userImg from "../../userImg.jpg";

function User(props) {
  const {
    id,
    name,
    username,
    catchPhrase,
    isAuthorized,
    followingUsers,
    followBtnClick,
    unfollowBtnClick,
  } = props;

  const [active, setActive] = useState(false);

  const buttonClicked = () => {
    //add warning ('log in to follow') if not Authorized and clicked on Follow btn
    setActive(true);
  };

  return (
    <div className="user">
      <img src={userImg} alt="user" />
      <div className="user-info">
        <h3>{name}</h3>
        <span>{username}</span>
        <p>{catchPhrase}</p>
      </div>
      {followingUsers.some((user) => user.name === name) ? (
        <button
          className="btn-unfollow btn"
          onClick={() => unfollowBtnClick(id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="btn-follow btn"
          onClick={isAuthorized ? () => followBtnClick(id) : buttonClicked}
        >
          {isAuthorized ? null : active ? (
            //add warning ('log in to follow') if not Authorized and clicked on Follow btn
            <span className="log-in-warning">Log in to add</span>
          ) : null}
          Follow
        </button>
      )}
    </div>
  );
}

export default User;
