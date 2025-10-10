import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Login from "./Pages/Login.js";
import Render from "./Pages/Render"; // yeh aapka class component hai
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar at top */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Render" element={<Render />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
