import React from "react";
import User from "./User";
import { Spinner } from "../Layout/Spinner";

const Users = ({ userData, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div  className='grid-3'>
      {userData.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};


export default Users;
