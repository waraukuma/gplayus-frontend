import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyGoogleLogIn from "./pages/MyGoogleLogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div class="container-md" className="App">
        <Routes>
          <Route path="/redirect" element={<Header />} />
        </Routes>
        {/* <Header /> */}
        <MyGoogleLogIn />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
