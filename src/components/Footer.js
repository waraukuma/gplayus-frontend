import React from "react";

const redirectUrl = () => {
  //새로운 창으로 열기
  window.open(`http://www.hangaramit.com/`);
};

const Footer = () => {
  return (
    <footer>
      <p onClick={redirectUrl}>HangaramIt</p>
      {/* <hr class="img-fluid img-thumbnail" className="footer" /> */}
    </footer>
  );
};

export default Footer;
