import React from "react";

function InviteFriends() {
  return (
    <div className="invite-friends">
      <i className="fas fa-users"></i>
      <div className="text">
        <h2>Invite Friends</h2>
        <p>
          Send invitation email
          <br /> to your friend
        </p>
      </div>

      <input placeholder="Enter email..." type="email" />
      <button>Send Invite</button>
    </div>
  );
}

export default InviteFriends;
