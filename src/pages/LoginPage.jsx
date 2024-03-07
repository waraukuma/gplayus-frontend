import { React } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import logo1 from "../assets/logo1.png";
import Glogo from "../assets/Glogo.svg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // 로그인 한 것으로 처리
  localStorage.setItem("login", true);
  localStorage.setItem("login_id", "AAA");
  localStorage.setItem("login_name", "앱 테스터 1");
  localStorage.setItem("login_email", "tester1@example.com");

  const navigate = useNavigate();
  const redirectHome = () => {
    navigate(`/`);
  };

  //구글 로그인,
  const requestBackReaponse = async () => {
    window.location.href = "/oauth2/authorization/google";
    try {
      const response = await fetch("/oauth2/authorization/google/redirect");
      const data = await response.json();
      // JWT 토큰을 받아서 로컬 스토리지에 저장
      localStorage.setItem("accessToken", data.accessToken);
      console.log(data.accessToken);
      navigate(`/`); //메인으로 이동

      // 사용자 정보를 가져오거나, 사용자가 로그인한 상태인지 확인하는 등의 추가적인 작업을 수행
      // 이후 사용자가 다른 페이지를 요청할 때마다 해당 JWT 토큰을 사용하여 사용자의 인증상태확인
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="p-1 d-flex justify-content-center align-items-center">
        {/* <MyGoogleLogin /> */}
        <div className="shadow p-1 mb-5 bg-body-tertiary rounded">
          <img
            src={logo1}
            alt="Gplayus_logo"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            onClick={redirectHome}
          />
          <Container className="align-items-center shadow p-1 mb-0 bg-body-tertiary rounded">
            <Form onClick={requestBackReaponse}>
              <Row className="align-items-center gx-1">
                <Col xs="auto">
                  <img src={Glogo} alt="Glogo" />
                </Col>
                <Col className="d-grid ">
                  <Button
                    variant="primary fw-bold"
                    onClick={requestBackReaponse}
                  >
                    구글 로그인
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
