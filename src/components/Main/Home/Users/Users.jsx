import React from "react";
import User from "./User/User";

function Users({ users }) {
  return (
    <div className="users">
      <h1>Users(10)</h1>
      {users.map(item => (
        <User
          key={item.id}
          id={item.id}
          name={item.name}
          username={item.username}
          catchPhrase={item.company.catchPhrase}
        />
      ))}
    </div>
  );
}

export default Users;
