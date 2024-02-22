import { React } from "react";
import { Container } from "react-bootstrap";
import MyGoogleLogin from "./MyGoogleLogin";

function LoginPage() {
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="p-2 d-flex justify-content-center align-items-center">
        <MyGoogleLogin />
      </div>
    </Container>
  );
}

export default LoginPage;
