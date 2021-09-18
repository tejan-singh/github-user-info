import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error 404 Page not found!</h1>
      <Link to="/" className="btn btn-light">
        Go back
      </Link>
    </div>
  );
};

export default Error;
