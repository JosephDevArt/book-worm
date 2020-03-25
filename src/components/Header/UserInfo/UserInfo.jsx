import React from "react";
import defaultUserImg from "./default-user-icon.jpg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

class UserInfo extends React.Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    picture: ""
  };
  responseFacebook = response => {
    console.log(response);
    this.setState(state => ({
      isLoggedIn: true,
      userID: response.userId,
      name: response.name,
      picture: response.picture.data.url,
      accessToken: state.accessToken
    }));
  };
  componentClicked = () => {
    console.log("clicked");
  };
  handleClick = () => {
    this.setState({
      isLoggedIn: false,
      accessToken: ""
    });
  };
  render() {
    console.log(this.state.isLoggedIn);
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div className="user_account">
          <p className="user_name">{this.state.name}</p>
          <img src={this.state.picture} alt="user" />
          <button className="logout_icon" onClick={this.handleClick}>
            <i className="fas fa-sign-out-alt logout_icon"></i>
            <span>Log out</span>
          </button>
        </div>
      );
    } else {
      fbContent = (
        <div className="user_account">
          <p className="user_name">Welcome to Book worm</p>
          <img src={defaultUserImg} alt="user" />
          <FacebookLogin
            appId="671544383656359"
            autoLoad={false}
            fields="name,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            render={renderProps => (
              <button className="logout_icon" onClick={renderProps.onClick}>
                <span>Log in</span>
                <i className="fas fa-sign-in-alt logout_icon"></i>
              </button>
            )}
          />
        </div>
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default UserInfo;
