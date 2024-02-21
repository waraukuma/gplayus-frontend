import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyAppPage from "./pages/MyAppPage";
import MyTesterPage from "./pages/MyTesterPage";
import AppDetailsPage from "./components/AppList";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myapp" element={<MyAppPage />} />
          <Route path="/mytester" element={<MyTesterPage />} />
          <Route path="/myapp/details" element={<AppDetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
