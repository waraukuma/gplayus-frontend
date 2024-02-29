import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./domains/Login/LoginPage";
import MyAppPage from "./domains/MyApp/MyAppPage";
import MyTesterPage from "./domains/MyTester/MyTesterPage";
import AppDetailsPage from "./domains/MyApp/AppDetailsPage";
import FindAppPage from "./domains/FindingApp/FindAppPage";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myapp" element={<MyAppPage />} />
          <Route path="/mytester" element={<MyTesterPage />} />
          <Route path="/myapp/:id" element={<AppDetailsPage />} />
          <Route path="/apps" element={<FindAppPage />}></Route>
          <Route path="/apps/:pageNumber" element={<FindAppPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
