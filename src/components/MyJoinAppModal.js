import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

export default function MyJoinAppModal() {
  console.log(8000);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute" }}
    >
      <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>앱 테스터 신청</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>해당 앱에 테스터로 참여하시겠습니까?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            참여
          </Button>
          <Button variant="primary" onClick={handleShow}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
