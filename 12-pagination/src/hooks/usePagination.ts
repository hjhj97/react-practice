import React, { useMemo, useState } from "react";

type PaginationOption = {
  itemPerPage: number;
  pagePerSection: number;
};

function usePagination(length: number, option: PaginationOption) {
  const [curPage, setCurPage] = useState(1);
  const [leftmostPage, setLeftmostPage] = useState(1);
  const totalPage = Math.ceil(length / (option.itemPerPage || 1));

  const isPreviousValid = useMemo(() => leftmostPage > option.pagePerSection, [leftmostPage, option.pagePerSection]);
  const isNextValid = useMemo(
    () => leftmostPage + option.pagePerSection <= totalPage,
    [leftmostPage, option.pagePerSection, totalPage]
  );

  const movePreviousSection = () => {
    const value = leftmostPage - option.pagePerSection;
    setLeftmostPage(value);
    setCurPage(value);
  };
  const moveNextSection = () => {
    const value = leftmostPage + option.pagePerSection;
    setLeftmostPage(value);
    setCurPage(value);
  };

  const getPaginationArray = () => {
    const res = [];
    for (let i = leftmostPage; i < Math.min(totalPage + 1, leftmostPage + option.pagePerSection); i++) {
      res.push(i);
    }
    return res;
  };

  return {
    curPage,
    setCurPage,
    getPaginationArray,
    totalPage,
    isPreviousValid,
    isNextValid,
    movePreviousSection,
    moveNextSection,
  };
}

export default usePagination;
