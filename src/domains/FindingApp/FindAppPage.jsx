import React, { useRef, useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import FindingAllApps from "./FindingAllApps";
import Paging from "./Paging";
import { useParams } from "react-router-dom";

function FindAppPage() {
  //검색
  const [searchInput, setSearchInput] = useState("");
  const search = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    //검색어 설정
    setSearchInput(search.current.value);
    if (!search.current.value) alert("입력하신 검색어가 없습니다.");
    console.log("검색 " + search.current.value);
  };

  //현재 페이지 가져오기
  const { pageNumber, pageCount } = useParams();
  console.log(`pageNumber ${pageNumber}`);
  console.log(`pageCount ${pageCount}`);

  // pageNumber을 사용하여 해당 페이지에 맞는 데이터를 가져와서 렌더링

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
                <Form.Control type="text" placeholder="Search" ref={search} />
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
        {<FindingAllApps searchData={searchInput} />}
      </div>
      <div className="">
        {
          <Paging
            totalItems={30}
            itemCountPerPage={5}
            pageCount={5}
            currentPage={pageNumber}
          />
        }
      </div>
    </div>
  );
}

export default FindAppPage;
