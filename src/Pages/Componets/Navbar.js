import React from "react";
import { Link } from "react-router-dom"; // MUST import Link
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
