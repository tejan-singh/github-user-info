import React from "react";
import User from "./User";
import { Spinner } from "../Layout/Spinner";

const Users = ({ userData, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {userData.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
