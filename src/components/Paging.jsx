import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Paging({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
}) {
  if (!currentPage) {
    currentPage = 1;
  }
  if (!pageCount) {
    pageCount = 10;
  }
  const navigate = useNavigate();
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(Math.floor(totalPages / pageCount));
  const endPage = start + (pageCount - 1);
  if (endPage > totalPages) {
    endPage = totalPages;
  }

  useEffect(() => {
    setStart(Math.floor((currentPage - 1) / pageCount) * pageCount + 1);

    //
    console.log(
      `Paging effect ${
        Math.ceil((currentPage - 1) / pageCount) * pageCount + 1
      }`
    );
    console.log(`Paging effect ${endPage}, ${totalPages}`);
  }, [currentPage, pageCount]);

  const goToPage = (page) => {
    navigate(`/apps/${page}`);
  };

  const handlePrevClick = () => {
    if (start > 1) {
      const newStart = Math.max(start - pageCount, 1);
      setStart(newStart);
      goToPage(newStart);
    }
  };

  const handleNextClick = () => {
    const newStart = start + pageCount;
    setStart(newStart);
    goToPage(newStart);
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev disabled={start === 1} onClick={handlePrevClick}>
        이전
      </Pagination.Prev>
      {[...Array(endPage)].map((_, index) => {
        const pageNumber = start + index;
        return (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => goToPage(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        disabled={endPage === totalPages}
        onClick={handleNextClick}
      >
        다음
      </Pagination.Next>
    </Pagination>
  );
}
