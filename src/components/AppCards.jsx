import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AppCards({ app, border }) {
  console.log(`AppCards${app}`);
  const navigate = useNavigate();

  return (
    <div style={{ border: border }}>
      <Card
        style={{
          margin: "1rem",
          padding: "0.5rem",
          border: "none",
          whiteSpace: "pre-wrap",
        }}
        onClick={() => {
          //변경
          navigate(`/apps/${app.id}`);

          console.log("이동");
        }}
      >
        <Card.Body>
          <Card.Header as="h3">이름: {app.title}</Card.Header>
          <ListGroup>
            <ListGroup.Item>회원: {app.memberId}</ListGroup.Item>
            <ListGroup.Item>지원자: {app.joiner}</ListGroup.Item>
            <ListGroup.Item>앱 설명: {app.description}</ListGroup.Item>
            <Card.Link href="#">
              <ListGroup.Item>
                웹(인터넷) 참여 신청: {app.web_url}
              </ListGroup.Item>
              <ListGroup.Item>
                앱(모바일) 참여 신청: {app.android_url}
              </ListGroup.Item>
            </Card.Link>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
