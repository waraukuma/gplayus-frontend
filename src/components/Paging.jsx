import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap"; // Importing React Bootstrap Pagination

export default function Paging({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev
        disabled={noPrev}
        onClick={() => setStart((prev) => Math.max(prev - pageCount, 1))}
      >
        이전
      </Pagination.Prev>
      {[...Array(pageCount)].map((a, i) => (
        <Pagination.Item
          key={i}
          active={currentPage === start + i}
          onClick={() => setStart(start + i)}
        >
          {start + i}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={noNext}
        onClick={() =>
          setStart((prev) => Math.min(prev + pageCount, totalPages))
        }
      >
        다음
      </Pagination.Next>
    </Pagination>
  );
}
