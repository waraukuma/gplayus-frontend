import React from "react";
import { Badge, Stack } from "react-bootstrap";

//벳지
const appNew = () => {};
const appIng = () => {};
const appSet = () => {};

function BadgeNew() {
  return (
    <div className="mx-1">
      <Stack direction="horizontal" gap={2}>
        <Badge bg="danger">New{appNew()}</Badge>
        <Badge bg="primary">모집중{appIng()}</Badge>
        <Badge bg="success">완료{appSet()}</Badge>
      </Stack>
    </div>
  );
}

export default BadgeNew;
