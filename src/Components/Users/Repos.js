import React from "react";
import Repo from "./Repo";

const Repos = ({ repos }) => {
  return (
    <div className="card">
      <h4 style={{ textAlign: "center" }}>Latest Repos</h4>
      {repos.map((repo) => {
        return <Repo repo={repo} key={repo.id} />;
      })}
    </div>
  );
};

export default Repos;
