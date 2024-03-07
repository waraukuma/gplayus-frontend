import React, { useRef, useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";

import { useLocation, useParams } from "react-router-dom";
import AppList from "../components/AppList";
import Paging from "../components/Paging";

function FindAppPage() {
  //검색
  const [searchInput, setSearchInput] = useState("");
  const search = useRef();
  const handleSearch = (e) => {
    e.preventDefault();

    //검색어 설정
    setSearchInput(search.current.value);
    console.log("검색 " + search.current.value);
  };

  //입력된 검색어와 데이터 불일치
  const clearSearch = () => {
    console.log("clear search");
    setSearchInput("");
    search.current.value = "";
  };

  //현재 페이지 가져오기
  const { pageNumber, totalPage, pageCount } = useParams();
  // http://localhost:3000/apps?setPage=1&page=10
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const setPage = searchParams.get("setPage");

  console.log(` pageCount ${pageCount}`);

  // setPage을 사용하여 해당 페이지에 맞는 데이터를 가져와서 렌더링

  return (
    <div>
      <Container fluid>
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form>
            <Row>
              <h2 className="fw-bold">앱 찾기</h2>
            </Row>
          </Form>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  ref={search}
                  // value={searchInput}
                  // onChange={(e) => {
                  //   // setSearchInput(e.target.value);
                  // }}
                />
              </Col>
              <Col xs="auto">
                {/* 앱검색 기능 */}
                <Button
                  type="submit"
                  value={searchInput}
                  onClick={handleSearch}
                >
                  찾기
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
      </Container>

      <hr />
      <div className="container-fluid">
        {/* 사용자 등록 앱 표시(카드형식) 진행/완료*/}
        <AppList searchData={searchInput} clearSearch={clearSearch} />
      </div>
      <div className="">
        {
          <Paging
            totalPage={totalPage}
            limit={5}
            pageCount={pageCount}
            pageNumber={pageNumber}
          />
        }
      </div>
    </div>
  );
}

export default FindAppPage;
