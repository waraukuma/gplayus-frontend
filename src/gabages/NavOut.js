import React from "react";

const redirectUrl = () => {
  //새로운 창으로 열기
  window.open(`http://www.hangaramit.com/`);
};

const NavOut = () => {
  return (
    <NavOut>
      <hr
        class="d-flex align-items-center py-4 bg-body-tertiary"
        onClick={redirectUrl}
      />
      <h1 className="d-flex align-items-center">HangaramIt</h1>
    </NavOut>
  );
};

export default NavOut;
