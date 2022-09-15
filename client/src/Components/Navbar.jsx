import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">GT</div>
      <nav className="navbar_item">
        <ul className="navbar_ul">
          <li className="navbar_li">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar_li">
            <Link to="/Record">Record</Link>
          </li>
          <li className="navbar_li">
            <Link to="/Check">Check</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
