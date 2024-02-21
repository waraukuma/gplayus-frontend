import { React, useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import AppList from "../components/AppList";
import MyAppStatus from "../components/MyAppStatus";
import { useNavigate } from "react-router-dom";

function MyAppPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("진행");

  //등록한 앱 상세페이지로 이동(미완성)
  const AppDetailsPage = () => {
    navigate(`/mydetails/{appId}`);
  };

  //앱검색 기능(미완성)
  const FindMyApp = () => {
    //
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
                <Form.Control type="text" placeholder="Search" />
              </Col>
              <Col xs="auto">
                {/* 앱검색 기능 */}
                <Button type="submit" onClick={FindMyApp}>
                  찾기
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
        <Form inline>
          <Row>
            {/* 진행/완료 MyAppStatus 컴퍼넌트 */}
            <Col>{<MyAppStatus status={status} setStatus={setStatus} />}</Col>
          </Row>
        </Form>
      </Container>

      <hr />
      {/* 선택된 앱(카드)으로 이동(클릭) AppDetailsPage(상세페이지) */}
      <div className="container-fluid" onClick={<AppDetailsPage />}>
        {/* 사용자 등록 앱 표시(카드형식) 진행/완료*/}
        {<AppList status={status} setStatus={setStatus} />}
      </div>
    </div>
  );
}

export default MyAppPage;