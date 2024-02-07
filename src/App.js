import "./App.css";
import GoogleLoginButton from "./pages/GoogleLogin";
import Footer from "./components/Footer";
import Header from "./components/Header";

export function App() {
  return (
    <div class="container-md" className="App">
      <Header />
      <GoogleLoginButton />
      <Footer />
    </div>
  );
}

export default App;
