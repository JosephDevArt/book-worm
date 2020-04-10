import React from "react";

function WeHave() {
  return (
    <div className="we-have">
      <div className="amount">
        <span>25M+</span>
        <div className="icon-and-text">
          <p>Books</p>
          <i className="fas fa-book"></i>
        </div>
      </div>
      <div className="people">
        <span>10,000+</span>
        <div className="icon-and-text">
          <p>Users</p>
          <i className="fas fa-users"></i>
        </div>
      </div>
      <div className="patreons">
        <span>5,000+</span>
        <div className="icon-and-text">
          <p>Patreons</p>
          <i className="fas fa-money-bill-wave-alt"></i>
        </div>
      </div>
      <div className="support">
        <span>1,000+</span>
        <div className="icon-and-text">
          <p>Branches</p>
          <i className="fas fa-building"></i>
        </div>
      </div>
    </div>
  );
}

export default WeHave;
