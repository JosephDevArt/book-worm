import React, { useEffect, useState } from "react";
import userImg from "./userImg.jpg";
import User from "./Users/User/User";
const Home = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);
  return (
    <section className="home-section">
      <div className="we-have">
        <div className="amount">
          <span>25M+</span>
          <div className="icon-and-name">
            <p>books</p>
            <i className="fas fa-book"></i>
          </div>
        </div>
        <div className="people">
          <span>1000+</span>
          <div className="icon-and-name">
            <p>users</p>
            <i className="fas fa-users"></i>
          </div>
        </div>
        <div className="patreons">
          <span>1000+</span>
          <div className="icon-and-name">
            <p>patreons</p>
            <i className="fas fa-money-bill-wave-alt"></i>
          </div>
        </div>
        <div className="support">
          <span>1000+</span>
          <div className="icon-and-name">
            <p>support</p>
            <i className="fas fa-headphones"></i>
          </div>
        </div>
      </div>
      <div className="users">
        <h1>Users(10)</h1>
        {userData.map(item => (
          <User
            key={item.id}
            name={item.name}
            username={item.username}
            catchPhrase={item.company.catchPhrase}
          />
        ))}
        {/* <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} />
        <User userData={userData} /> */}
      </div>
      <div className="my-network">
        <div className="num-and-word">
          <span>738</span>
          <p>followers</p>
        </div>
        <div className="num-and-word">
          <span>362</span>
          <p>following</p>
        </div>
        <div className="num-and-word">
          <span>617</span>
          <p>posts</p>
        </div>
      </div>
      <div className="like-and-invite">
        <div className="liked-posts">
          <div className="image-and-info">
            <img src={userImg} />
            <div className="info">
              <p>user</p>
              <span>title</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                non?
              </p>
            </div>
          </div>
          <div className="image-and-info">
            <img src={userImg} />
            <div className="info">
              <p>user</p>
              <span>title</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                non?
              </p>
            </div>
          </div>
          <div className="image-and-info">
            <img src={userImg} />
            <div className="info">
              <p>user</p>
              <span>title</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                non?
              </p>
            </div>
          </div>
          <button>See More</button>
        </div>
        <div className="invite-people">
          <i className="fas fa-users"></i>
          <h2>Invite People</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptas doloribus esse ipsam magni animi!
          </p>
          <input placeholder="Enter email..." type="email" />
          <button>Send Invite</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
