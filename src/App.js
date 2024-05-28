import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Tintuc from "./components/tintuc/Tintuc";
import Hotro from "./components/hotro/Hotro";
import Cs from "./components/chinhsach/Cs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/hotro" element={<Hotro />} />
        <Route path="/cs" element={<Cs />} />
      </Routes>
    </Router>
  );
}
export default App;
