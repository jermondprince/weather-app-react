import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
