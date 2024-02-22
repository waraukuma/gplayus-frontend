import React from "react";
import { Badge, Stack } from "react-bootstrap";

//벳지

function BadgeNew() {
  return (
    <div className="mx-1">
      <Stack direction="horizontal" gap={2}>
        <Badge bg="danger">New</Badge>
        <Badge bg="primary">모집중</Badge>
        <Badge bg="success">완료</Badge>
      </Stack>
    </div>
  );
}

export default BadgeNew;
