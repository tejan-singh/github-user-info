import React, { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //to handle empty query
    if (text === "") {
      return props.setAlert("Please enter something to search", "light");
    }

    props.searchUser(text);
    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="search for a github user"
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {props.showClear && (
        <button onClick={props.clearSearch} className="btn btn-light btn-block">
          Clear Search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
