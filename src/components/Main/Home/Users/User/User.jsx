import React from "react";
import userImg from "../../userImg.jpg";
function User(props) {
  //   console.log(props);
  return (
    <div className="user-box">
      <img src={userImg} />
      <div className="user-info">
        <h3>{props.name}</h3>
        <h5>{props.username}</h5>
        <p>{props.catchPhrase}</p>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default User;
