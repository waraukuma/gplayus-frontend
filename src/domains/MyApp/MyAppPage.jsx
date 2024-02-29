import { React, useRef, useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import AppList from "../../components/AppList";
import MyAppStatus from "./MyAppStatus";

function MyAppPage() {
  const [status, setStatus] = useState("진행");
  // const [searchData, setSearchData] = useState("");

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
              <p className="fw-bold">MyAppPage에 오신 걸 환영합니다.</p>
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
        <Form>
          <Row>
            {/* 진행/완료 MyAppStatus 컴퍼넌트 */}
            <Col>{<MyAppStatus status={status} setStatus={setStatus} />}</Col>
          </Row>
        </Form>
      </Container>

      <hr />
      <div className="container-fluid">
        {/* 사용자 등록 앱 표시(카드형식) 진행/완료*/}
        {
          <AppList
            status={status}
            setStatus={setStatus}
            searchData={searchInput}
          />
        }
      </div>
    </div>
  );
}

export default MyAppPage;
