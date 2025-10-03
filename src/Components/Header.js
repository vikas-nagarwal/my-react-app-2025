import React from "react";
import { Link } from "react-router-dom";
import Login from "../Pages/Signup";

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
        <li>
          <Link to="/Signup">Signup</Link>
        </li>{" "}
      </ul>
    </div>
  );
}

export default Header;
