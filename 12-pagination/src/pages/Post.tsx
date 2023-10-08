import React, { useEffect, useState } from "react";
import { Post } from "../App";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
    async function fetchData() {
      const res = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
      setPost(res);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;
