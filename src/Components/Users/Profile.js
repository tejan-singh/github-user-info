import React, { useEffect } from "react";
import { Spinner } from "../Layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "./Repos";

const Profile = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
    // to disable the warning for empty dependency, we specify,
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = props.user;

  const { loading } = props.loading;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Link to="/" className="btn btn-light">
        Go back
      </Link>

      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="user_profile_image"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>
            <i className="fas fa-map-marker-alt" /> {location}
          </p>
          <div>
            Hireable:{" "}
            {hireable ? (
              <i className="fas fa-check text-success" />
            ) : (
              <i className="fas fa-times-circle text-danger" />
            )}
          </div>
        </div>

        <div>
          {bio && (
            <div>
              <h3>About me:</h3>
              <p>{bio}</p>
            </div>
          )}

          <a href={html_url} className="btn btn-success my-1">
            Visit GitHub Profile
          </a>

          <div className="my-1">
            <p>
              <strong>Username:</strong> {login}
            </p>
            <p>
              <strong>Company/College:</strong> {company}
            </p>
            <p>
              <strong>Website: </strong>
              <a href={blog}>{blog}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-dark">Followers: {followers}</div>
        <div className="badge badge-dark">Follwing: {following}</div>
        <div className="badge badge-dark">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Pubic Gists: {public_gists}</div>
      </div>

      <Repos repos={props.repos} />
    </>
  );
};

export default Profile;
