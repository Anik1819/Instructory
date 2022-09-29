import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="Container d-flex justify-content-center mt-5">
      <input
        type="text"
        className="course-name"
        placeholder="Start Learning! Ex:Fiver Freelancing crash course "
      ></input>
      <button className="btn-sa">Search Anything</button>
    </div>
  );
};

export default Search;
