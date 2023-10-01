import React from "react";

function SearchResult({ name }) {
  return (
    <div className="search-result-wrapper" onClick={() => alert(name)}>
      <p className="result-item">{name}</p>
    </div>
  );
}

export default SearchResult;
