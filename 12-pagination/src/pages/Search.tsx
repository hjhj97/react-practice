import React from "react";
import useQueryString from "../hooks/useQueryString";

function Search() {
  const qs = useQueryString();
  return (
    <div>
      <h3>Search Result : {JSON.stringify(qs.query)}</h3>
    </div>
  );
}

export default Search;
