import React, { useEffect, useRef, useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import FindingAllApps from "../../components/FindingAllApps";
import Paging from "../../components/Paging";

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

  return (
    <div>
      <Container fluid>
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            <Row>
              <h2 className="fw-bold">앱 찾기</h2>
            </Row>
          </Form>
          <Form inline>
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
      <div className="">{<Paging />}</div>
    </div>
  );
}

export default FindAppPage;
