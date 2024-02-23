import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Row, Col, Image } from "react-bootstrap";
import avatar from "../assets/avatar2.jpg";

export default function Board({ selected }) {
  // const myInput = useContext(InputContext);
  const myInput = useRef();

  useEffect(() => {
    if (selected) {
      console.log("test");
      myInput.current.focus();
    }
  }, [selected]);
  return (
    <div className="container" style={{ padding: 0 }}>
      <Card>
        <Card.Header>
          <h5>앱테스터 참여 게시판</h5>
          <p className="text-muted">
            테스터로 참여를 원하시는 분은 댓글 부탁드립니다.
          </p>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-5">
            <Row>
              <Form.Label>댓글</Form.Label>
              <Col xs="auto">
                <Image src={avatar} alt="Avatar" fluid width="30" height="30" />
              </Col>
              <Col>
                <Form.Control
                  ref={myInput}
                  type="text"
                  placeholder="참여합니다."
                />
              </Col>
              <Col xs="auto">
                <Button variant="primary">신청</Button>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>첨부파일</Form.Label>
            <Form.Control type="file" />
            <Form.Text className="text-muted">
              이미지, 문서, zip파일, 최대 5MB까지 가능
            </Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
}
