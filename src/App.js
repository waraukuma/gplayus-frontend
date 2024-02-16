import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyAppPage from "./pages/MyAppPage";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myapp" element={<MyAppPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
