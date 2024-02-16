import { React } from "react";
import MyGoogleLogin from "../components/MyGoogleLogin";

function LoginPage() {
  return (
    <div className="container-fluid vh-100">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div
          className="bg-info p-4 d-flex justify-content-center align-items-center"
          style={{ maxWidth: "300px", maxHeight: "400px" }}
        >
          <MyGoogleLogin />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
