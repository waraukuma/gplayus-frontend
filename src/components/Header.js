import logo1 from "../src_assets/logo1.png";
import { useNavigate, Route, Routes } from "react-router-dom";
import Redirect from "../pages/Redirect";
import React from "react";

const Header = () => {
  const navigate = useNavigate();

  const redirectUrl = () => {
    navigate("/redirect", { state: { url: "http://www.hangaramit.com" } });
  };

  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
      <h1 className="h4">
        <div className="d-flex align-items-center text-dark text-decoration-none">
          <span>Gplayus</span>
          <img src={logo1} alt="logo" className="Gplayus_logo" />
        </div>
      </h1>
      <button onClick={redirectUrl}>Hangaramit</button>
      <Redirect />
    </header>
  );
};

export default Header;
