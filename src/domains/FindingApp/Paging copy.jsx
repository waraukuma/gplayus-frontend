import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "react-bootstrap"; // Importing React Bootstrap Pagination

export default function Paging({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
}) {
  //현재 페이지 가져오기
  // pageNumber을 사용하여 해당 페이지에 맞는 데이터를 가져와서 렌더링
  const { pageNumber } = useParams();
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const navigate = useNavigate();

  const noPrevPage = () => {
    if (start === 1) {
      console.log("이전페이지 없음");
      return true;
    }
    navigate(`/apps/${pageNumber - 1}`);
    console.log("이전");
    return false;
  };

  const noNextPage = () => {
    if (start + pageCount - 1 >= totalPages);
    console.log("다음페이지 없음");
    navigate(`/apps/${pageNumber}`);
    console.log("다음");
  };

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    // {/* 페이지 번호가 클릭될 때 해당 페이지 번호를 URL에 추가 */}

    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev
        disabled={noPrevPage}
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
          {pageNumber + i}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={noNextPage}
        onClick={() =>
          setStart((prev) =>
            Math.min(prev + pageCount, totalPages - pageCount + 1)
          )
        }
      >
        다음
      </Pagination.Next>
    </Pagination>
  );
}
