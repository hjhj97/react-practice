import { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (text: string) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((users) => {
        setResults(users.filter((user) => user.name.toLowerCase().includes(text)));
      })
    );
  };

  const handleChangeQuery = (text: string) => {
    setQuery(text);
    fetchData(text);
  };

  return (
    <div className="wrapper">
      <SearchInput query={query} handleChangeQuery={handleChangeQuery} />
      {results.map((result) => (
        <SearchResult key={result.id} {...result} />
      ))}
    </div>
  );
}

export default App;
