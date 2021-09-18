import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about-section">
      <Link to="/" className="btn btn-light">
        Go back
      </Link>
      <h1 className="my-1">About page</h1>
      <p className="my-1">
        GitHub User Info is an online open source web application which helps
        you to find GitHub user and their details.
      </p>
    </section>
  );
};

export default About;
