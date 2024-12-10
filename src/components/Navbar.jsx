import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";

const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Deploy com React
            </Link>
          </li>
          <li>
            <Link to="/vite" onClick={() => setIsMobileMenuOpen(false)}>
              Deploy com Vite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
