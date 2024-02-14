import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyGoogleLogin from "./components/MyGoogleLogIn";

export function App() {
  return (
    <div className="App">
      <Header />
      <MyGoogleLogin />
      <Footer />
    </div>
  );
}

export default App;
