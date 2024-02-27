import React, { useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from "react-bootstrap";
import AppList from "../../components/AppList";
import Badge from "../../components/Badge";
import DetailApp from "../../components/AppList";

//앱검색 기능(미완성)
const FindingApp = () => {
  //
};

function FindAppPage() {
  return (
    <div>
      <Container fluid>
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            <Row>
              <p className="fw-bold">(모든) 앱 찾기</p>
            </Row>
          </Form>
          <Form inline>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Search" />
              </Col>
              <Col xs="auto">
                {/* 앱검색 기능 */}
                <Button type="submit" onClick={FindingApp}>
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
        {<DetailApp />}
      </div>
      <div className=""></div>
    </div>
  );
}

export default FindAppPage;
