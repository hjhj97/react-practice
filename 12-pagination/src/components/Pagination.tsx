import React, { Dispatch, SetStateAction, useEffect } from "react";
import usePagination from "../hooks/usePagination";
import { Post } from "../App";

const itemPerPage = 10;
const pagePerSection = 5;

type PaginationProps = {
  posts: Post[];
  setPaginatedPosts: Dispatch<SetStateAction<Post[]>>;
};

function Pagination({ posts, setPaginatedPosts }: PaginationProps) {
  const {
    curPage,
    setCurPage,
    getPaginationArray,
    isPreviousValid,
    isNextValid,
    moveNextSection,
    movePreviousSection,
  } = usePagination(posts.length, {
    itemPerPage,
    pagePerSection,
  });

  const paginationArray = getPaginationArray();

  useEffect(() => {
    const pageStartIdx = (curPage - 1) * itemPerPage;
    setPaginatedPosts(posts.slice(pageStartIdx, pageStartIdx + itemPerPage));
  }, [posts, curPage, setPaginatedPosts]);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {isPreviousValid && <span onClick={movePreviousSection}>&lt;</span>}
      {paginationArray.map((page) => (
        <span key={page}>
          <span style={{ color: curPage === page ? "red" : "black" }} onClick={() => setCurPage(page)}>
            {page}
          </span>
        </span>
      ))}
      {isNextValid && <span onClick={moveNextSection}>&gt;</span>}
    </div>
  );
}

export default Pagination;
