import React from "react";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

function Header() {
  return (
    <div>
      <ul className="headersec">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blog</li>
        <li>
          <Link to="/Login">Login</Link>
        </li>{" "}
      </ul>
    </div>
  );
}

export default Header;
