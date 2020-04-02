import React, { useState } from "react";
import userImg from "../../userImg.jpg";

function User({
  id,
  name,
  username,
  catchPhrase,
  isAuthorized,
  followingUsers,
  followBtnClick,
  unfollowBtnClick
}) {
  const [active, setActive] = useState(false);
  const buttonClicked = () => {
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
        <button
          className="btn-unfollow btn"
          onClick={() => unfollowBtnClick(id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={`btn-follow btn ${
            //add warning ('log in to follow') if not Authorized and clicked on Follow btn
            isAuthorized ? null : active ? "log-in-warning" : null
          }`}
          onClick={isAuthorized ? () => followBtnClick(id) : buttonClicked}
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default User;
