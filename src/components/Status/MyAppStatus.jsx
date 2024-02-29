import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myicon1 from "../../assets/myicon1.svg";
import myicon2 from "../../assets/myicon2.svg";

function MyAppStatus({ status, setStatus }) {
  console.log(status);

  return (
    <Container
      border="true"
      className="border-light-subtle"
      style={{ padding: "1rem" }}
    >
      <Row>
        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            setStatus("진행");
          }}
          style={{ border: status === "진행" ? "2px solid red" : "" }}
        >
          <img src={myicon1} alt="myicon1" />
          진행
        </Col>

        <Col
          className="d-flex flex-column align-items-center"
          onClick={() => {
            setStatus("완료");
          }}
          style={{ border: status === "완료" ? "2px solid blue" : "" }}
        >
          <img src={myicon2} alt="myicon2" />
          완료
        </Col>
      </Row>
    </Container>
  );
}

export default MyAppStatus;
