import { Link } from "react-router-dom";
import logo1 from "../src_assets/logo1.png";
import React, { useContext } from "react";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
      <h1 className="h4">
        <div className="d-flex align-items-center text-dark text-decoration-none">
          <span>Gplayus</span>
          <image src={logo1} className="Gplayus_logo" />
        </div>
      </h1>
      <Link to="http://www.hangaramit.com/"> Hangaramit </Link>
    </header>
  );
};

export default Header;
