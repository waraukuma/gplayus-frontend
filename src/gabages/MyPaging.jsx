import { useEffect, useState } from "react";

export default function MyPaging({ totalPage, limit, page, setPage }) {
  const [currentPage, setCurrentPage] = useState([]);
  const [totoalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPage(totoalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPage(totoalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  //totalPage배열을 limit크기로 나눠 slicedPage에 할당
  useEffect(() => {
    // const slicedPage = totalPage.map((_, index) =>
    //   totalPage.slice(index * limit, (index + 1) * limit)
    // );
    //특정 숫자까지의 배열을 만들고 limit기준으로 자른 배열함수
    const slicedArrayByLimit = (totalPage, limit) => {
      const totalPageArray = Array(totalPage)
        .fill()
        .map((_, i) => i);
      return Array(Math.ceil(totalPage / limit)).fill.map(() =>
        totalPageArray.splice(0, limit)
      );
    };
    const slicedPage = slicedArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPage);
    setCurrentPage(slicedPage[0]); //첫번째 페이지를 현재페이지로 설정
  }, [totalPage, limit]); //totalPage 또는 limit가 변경될 때마다 실행

  // const pages = [];
  // const handlePageChange = (pageNumber) => {
  //   // 페이지 변경 로직을 여기에 추가
  //   console.log(`Go to page ${pageNumber}`);
  // };

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          이전
        </button>
      </li>
      {/* 각 페이지 번호에 대한 요소 생성 */}
      {currentPage?.map((i) => (
        <li key={i + 1} className="page-item">
          {/* 페이지 버튼 클릭 이벤트 추가 */}
          <button
            className="page-link"
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === totalPage}
        >
          다음
        </button>
      </li>
    </ul>
  );
}
