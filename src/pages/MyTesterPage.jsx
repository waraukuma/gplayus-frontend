import { React, useState, useRef } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import AppList from "../components/AppList";
import MyTesterStatus from "../components/Status/MyTesterStatus";

function MyTesterPage() {
  //로그인 후 상태 가정
  const loginId = localStorage.getItem("login_id");
  const loginName = localStorage.getItem("login_name");
  const loginEmail = localStorage.getItem("login_email");
  console.log(loginId);

  const [status, setStatus] = useState("진행");

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

  return (
    <div>
      <Container fluid>
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form>
            <Row>
              <p className="fw-bold">
                {loginName}님 MyTesterPage에 오신 걸 환영합니다.
              </p>
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
        <Form>
          <Row>
            {/* 대기/진행/완료 <MyTesterStatus 컴퍼넌트 */}
            <Col>
              {<MyTesterStatus status={status} setStatus={setStatus} />}
            </Col>
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
            loginEmail={loginEmail}
            searchData={searchInput}
            clearSearch={clearSearch}
          />
        }
      </div>
    </div>
  );
}

export default MyTesterPage;
