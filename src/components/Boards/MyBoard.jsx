import React, { useEffect, useRef, useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

export default function Board({ selected, openModal }) {
  const [show, setShow] = useState(false);
  const myInput = useRef();

  const onClose = () => {
    setShow(false);
  };

  useEffect(() => {
    if (selected) {
      console.log("test");
      myInput.current.focus();
    }
  }, [selected]);

  return (
    <div className="container" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Card>
        <Card.Header>
          <h5>나의 게시판</h5>
          <p className="text-muted">조회/수정/삭제</p>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-5">
            <Row>
              <Form.Label>앱테스터 참여후기</Form.Label>
              <Col>
                <Form.Control ref={myInput} type="text" />
              </Col>
              {selected && (
                <Col xs="auto">
                  <Button
                    onClick={() => {
                      console.log("신청 button");
                      setShow(true);
                    }}
                  >
                    신청
                  </Button>
                </Col>
              )}
            </Row>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
}
