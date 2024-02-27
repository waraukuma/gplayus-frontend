import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

export default function MyJoinAppModal({ onConfirm, show2, onClose }) {
  console.log(8000);

  const [show, setShow] = useState(show2);
  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleConfirm = () => {
    alert("테스터 참여 신청이 완료되었습니다!");
  };

  return (
    <div className="modal show">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>앱 테스터 신청</Modal.Title>
        </Modal.Header>
        <Modal.Body>해당 앱에 테스터로 참여하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleConfirm();
            }}
          >
            참여
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
