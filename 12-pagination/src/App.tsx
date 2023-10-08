import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./components/Pagination";
import "./style.css";

export type Post = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [paginatedPosts, setPaginatedPosts] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    if (!inputRef || !inputRef.current) return;
    const query = inputRef.current.value;
    navigate(`/search?query=${query}`);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
      setPosts(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {paginatedPosts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
      <Pagination posts={posts} setPaginatedPosts={setPaginatedPosts} />
    </>
  );
}

export default App;
