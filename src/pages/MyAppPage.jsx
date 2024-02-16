import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyAppPage() {
  return (
    <div className="container-fluid vh-100">
      <nav className=" navbar bg-body-tertiary h-100 d-flex align-items-start">
        <div className="container-fluid">
          <p className="fw-bolder h-100 text-center">
            MyAppPage님, 환영합니다.
          </p>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <nav className="nav nav-pills flex-column flex-sm-row">
        <BrowserRouter>
          <Routes>
            <Route
              path="/myapp/userRegisteringApp"
              element="{<UserRegisteringApp/>}"
            />

            <Route path="/myapp/userJoiningApp" element="{<UserJoiningApp/>}" />
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default MyAppPage;
