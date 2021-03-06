import React from "react";

const Repo = ({ repo }) => {
  const { html_url, name } = repo;
  return (
    <div className="card">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
    </div>
  );
};

export default Repo;
