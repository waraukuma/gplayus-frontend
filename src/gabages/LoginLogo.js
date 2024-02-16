import logo1 from "../src_assets/logo1.png";
import { useNavigate, Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";

const NavigaterHeader = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate(`/`);
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <img
        src={logo1}
        class="img-fluid"
        alt="Gplayus_logo"
        onClick={redirectHome}
      />
    </div>
  );
};

const LoginLogo = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigaterHeader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginLogo;
