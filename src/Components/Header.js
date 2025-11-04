import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="headersec">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Service</li>
        <li>Blog</li>
        <li>
          <Link to="/Render">render</Link>
        </li>{" "}
        <li>
          <Link to="/Login">Login</Link>
        </li>{" "}
        <li>
          <Link to="/Signup">Signup</Link>
        </li>{" "}
        <li>
          <Link to="/Practise">Prictise</Link>
        </li>{" "}
      </ul>
    </div>
  );
}

export default Header;
