import React from "react";
import "./../styles/navbar.css";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <button className="btn-nav" onClick={() => onNavigate("react")}>Deploy Guide React</button>
          </li>
          <li>
            <button className="btn-nav" onClick={() => onNavigate("vite")}>Deploy Guide Vite</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
