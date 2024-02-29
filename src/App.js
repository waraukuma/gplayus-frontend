import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyAppPage from "./pages/MyAppPage";
import MyTesterPage from "./pages/MyTesterPage";
import FindAppPage from "./pages/FindAppPage";
import AppDetailsPage from "./pages/AppDetailsPage";
import AppRegisterPage from "./pages/AppRegisterPage";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage/>}/> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myapp" element={<MyAppPage />} />
          <Route path="/mytester" element={<MyTesterPage />} />
          <Route path="/apps" element={<FindAppPage />}></Route>
          <Route path="/apps/:id" element={<AppDetailsPage />}></Route>
          <Route path="/register" element={<AppRegisterPage />}></Route>
          <Route path="/apps/:id/:pageNumber" element={<FindAppPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
