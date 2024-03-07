import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <div>
          <img
            className="logo"
            src="https://th.bing.com/th/id/OIP.jTqtwtaO38L0OKEgH3bVFwAAAA?rs=1&pid=ImgDetMain"
            alt="logo"
          />
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/cryptotaxes">Crypto Taxes</NavLink>
        </li>
        <li>
          <NavLink to="/freetools">Free Tools</NavLink>
        </li>
        <li>
          <NavLink to="/resourcecenter">Resource Center</NavLink>
        </li>
        <li>
          <div className="signup">
            <NavLink to="/signup">Get Started</NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};
