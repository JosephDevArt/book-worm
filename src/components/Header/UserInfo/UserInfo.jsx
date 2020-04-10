import React, { useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import defaultUserImg from "./default-user-icon.jpg";

import { setIsAuthorized } from "./../../../actions/userActions";
import { loadReadLaterBooks } from "./../../../actions/readLaterActions";
import { setFollowingUsers } from "./../../../actions/homeActions";

const UserInfo = () => {
  const dispatch = useDispatch();

  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  const [userInfo, setUserInfo] = useState({
    userName: "",
    userImg: "",
  });

  const [isAuthorizing, setIsAuthorizing] = useState(false);

  const logIn = () => {
    //waiting for facebook response
    setIsAuthorizing(true);
  };

  const responseFacebook = (response) => {
    //received response
    setUserInfo({
      userName: response.name,
      userImg: response.picture.data.url,
    });
    setIsAuthorizing(false);

    dispatch(setIsAuthorized(true));
  };

  const logOut = () => {
    // remove all books from ReadLater,
    // remove all users from following
    batch(() => {
      dispatch(setIsAuthorized(false));
      dispatch(loadReadLaterBooks([]));
      dispatch(setFollowingUsers([]));
    });
  };

  let info;

  if (isAuthorized) {
    info = (
      <>
        <p className="user-name">{userInfo.userName}</p>
        <img src={userInfo.userImg} alt="user" />
        <button className="logout-button" onClick={logOut}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Log out</span>
        </button>
      </>
    );
  } else {
    info = (
      <>
        <p className="user-name">Welcome to Book worm</p>
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
  return <div className="user-account">{info}</div>;
};

export default UserInfo;
