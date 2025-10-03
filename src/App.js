import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Signup from "./Pages/Signup.js";
import Login from "./Pages/Login.js";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar at top */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
