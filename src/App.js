import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup";
import { User, Data } from "./Pages/Render";
import Practise from "./Pages/Practise.js";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/data" element={<Data />} />
        <Route path="/practise" element={<Practise />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
