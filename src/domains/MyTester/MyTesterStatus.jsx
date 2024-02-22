import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myicon2 from "../../assets/myicon2.svg";
import myicon1 from "../../assets/myicon1.svg";
import myicon0 from "../../assets/myicon0.png";

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
          <img src={myicon0} alt="myicon0" />
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
          <img src={myicon1} alt="myicon1" />
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
          <img src={myicon2} alt="myicon2" />
          {/* <Card.Link href={navigate(0)}>완료</Card.Link> */}
          완료
        </Col>
      </Row>
    </Container>
  );
}

export default MyTesterStatus;
