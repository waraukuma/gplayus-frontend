import { React } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import Glogo from "../../assets/Glogo.svg";
import Button from "react-bootstrap/Button";

import { Container, Form, Row, Col } from "react-bootstrap";

const MyGoogleLogin = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate(`/home`);
  };

  const requestBack = () => {
    // TODO : 백 요청 로직
  };

  const responseBack = () => {
    // TODO : 백 응답 로직
  };

  return (
    <div className="shadow p-1 mb-5 bg-body-tertiary rounded">
      <img
        src={logo1}
        alt="Gplayus_logo"
        style={{ width: "100%", maxWidth: "300px", height: "auto" }}
        onClick={redirectHome}
      />
      <Container className="align-items-center shadow p-1 mb-0 bg-body-tertiary rounded">
        <Form inline onClick={requestBack}>
          <Row className="align-items-center gx-1">
            <Col xs="auto">
              <img src={Glogo} alt="Glogo" />
            </Col>
            <Col className="d-grid ">
              <Button variant="primary fw-bold" onClick={requestBack}>
                구글 로그인
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default MyGoogleLogin;
