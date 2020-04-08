import React, { useState, useEffect } from "react";
import defaultUserImg from "./default-user-icon.jpg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { setIsAuthorized } from "./../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { loadReadLaterBooks } from "./../../../actions/readLaterActions";
import { loadUsers, setFollowingUsers } from "./../../../actions/homeActions";

const UserInfo = (props) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState("");
  const [isAuthorizing, setIsAuthorizing] = useState(false);

  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  const logIn = () => {
    //waiting for facebook response
    setIsAuthorizing(true);
  };

  const responseFacebook = (response) => {
    //received response
    setUserName(response.name);
    setUserImg(response.picture.data.url);
    setIsAuthorizing(false);
    dispatch(setIsAuthorized(true));
  };

  const logOut = () => {
    dispatch(setIsAuthorized(false));
    dispatch(loadReadLaterBooks([]));
    dispatch(setFollowingUsers([]));
  };

  let info;
  if (isAuthorized) {
    info = (
      <>
        <p className="user_name">{userName}</p>
        <img src={userImg} alt="user" />
        <button className="logout-button" onClick={logOut}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Log out</span>
        </button>
      </>
    );
  } else {
    info = (
      <>
        <p className="user_name">Welcome to Book worm</p>
        <img
          src={defaultUserImg}
          className={isAuthorizing ? "animate-spin" : null}
          alt="user"
        />
        <FacebookLogin
          appId="671544383656359"
          autoLoad={false}
          fields="name,picture"
          onClick={logIn}
          callback={responseFacebook}
          render={(renderProps) => (
            <button className="login-button" onClick={renderProps.onClick}>
              <i className="fas fa-sign-in-alt"></i>
              <span>Log in</span>
            </button>
          )}
        />
      </>
    );
  }
  return <div className="user_account">{info}</div>;
};

export default UserInfo;
