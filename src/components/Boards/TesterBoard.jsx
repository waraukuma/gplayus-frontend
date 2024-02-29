import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

export default function TesterBoard({ showComfirm, setShowComfirm }) {
  const myInputRef = useRef();

  //로그인 후 상태 가정
  const loginId = localStorage.getItem("login_id");
  const loginName = localStorage.getItem("login_name");
  const loginEmail = localStorage.getItem("login_email");
  console.log(loginEmail);

  useEffect(() => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  }, []);

  return (
    <div className="container" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Card>
        <Card.Header>
          <h5>앱테스터 참여 게시판</h5>
          <p className="text-muted">
            테스터로 참여를 원하시는 분은 댓글 부탁드립니다.
          </p>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3 m-2">
            <Row>
              <Col>
                <Form.Control
                  ref={myInputRef}
                  type="text"
                  placeholder={showComfirm ? "" : "참여합니다."}
                  value={loginId && showComfirm ? loginEmail : ""}
                  onChange={() => {}}
                />
              </Col>
              {showComfirm && (
                <Col xs="auto">
                  <Button variant="primary">신청합니다</Button>
                </Col>
              )}
            </Row>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
}
