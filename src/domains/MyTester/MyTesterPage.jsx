import { React, useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import AppList from "../../components/AppList";
import MyTesterStatus from "./MyTesterStatus";

function MyTesterPage() {
  const [status, setStatus] = useState("진행");

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
              <p className="fw-bold">MyTesterPage에 오신 걸 환영합니다.</p>
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
        {<AppList status={status} setStatus={setStatus} />}
      </div>
    </div>
  );
}

export default MyTesterPage;
