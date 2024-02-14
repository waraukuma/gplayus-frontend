import logo1 from "../src_assets/logo1.png";
import { useNavigate, Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";

const NavigaterHeader = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate(`/`);
  };

  return (
    <div class="object-fit-sm-contain border rounded">
      <img
        src={logo1}
        class="img-fluid"
        alt="Gplayus_logo"
        onClick={redirectHome}
      />
    </div>
  );
};

const Header = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigaterHeader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
