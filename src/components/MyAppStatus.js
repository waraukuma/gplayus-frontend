import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myappregistering from "../assets/myappregistering.svg";
import myappregistered from "../assets/myappregistered.svg";

function MyAppStatus(props) {
  console.log(props.status);

  return (
    <Container border border-light-subtle style={{ padding: "1rem" }}>
      <Row>
        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            props.setStatus("진행");
          }}
          style={{ border: props.status === "진행" ? "2px solid red" : "" }}
        >
          <img src={myappregistering} alt="myappregistering" />
          {/* <Card.Link href="#">진행({5})</Card.Link> */}
          진행
        </Col>

        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            props.setStatus("완료");
          }}
          style={{ border: props.status === "완료" ? "2px solid blue" : "" }}
        >
          <img src={myappregistered} alt="myappregistered" />
          {/* <Card.Link href="#">완료({1})</Card.Link> */}
          완료
        </Col>
      </Row>
    </Container>
  );
}

export default MyAppStatus;
