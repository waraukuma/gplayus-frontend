import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myappregistering from "../assets/myappregistering.svg";
import myappregistered from "../assets/myappregistered.svg";
import myjoining from "../assets/myjoining.png";

function MyTesterStatus(props) {
  console.log(props.status);

  return (
    <Container border border-light-subtle style={{ padding: "1rem" }}>
      <Row>
        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            props.setStatus("대기");
          }}
          style={{ border: props.status === "대기" ? "2px solid black" : "" }}
        >
          <img src={myjoining} alt="myjoining" />
          대기
          {/* <Card.Link href={navigate(0)}>대기</Card.Link> */}
        </Col>
        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            props.setStatus("진행");
          }}
          style={{ border: props.status === "진행" ? "2px solid red" : "" }}
        >
          <img src={myappregistering} alt="myappregistering" />
          진행
          {/* <Card.Link href={navigate(0)}>진행</Card.Link> */}
        </Col>

        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            props.setStatus("완료");
          }}
          style={{ border: props.status === "완료" ? "2px solid blue" : "" }}
        >
          <img src={myappregistered} alt="myappregistered" />
          {/* <Card.Link href={navigate(0)}>완료</Card.Link> */}
          완료
        </Col>
      </Row>
    </Container>
  );
}

export default MyTesterStatus;
