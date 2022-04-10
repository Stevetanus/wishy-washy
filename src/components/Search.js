import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const keydetect = (k) => {
    if (k.code === "Enter") {
      search();
    }
  };
  return (
    <div className="search">
      <input onChange={inputHandler} onKeyPress={keydetect} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
