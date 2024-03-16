import React from "react";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h3>NEXT.JS</h3>
        </div>
        <div className="items ">
          <ul className="list-ul ">
            <li className="list-li">
              <a href="home">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="help">Help</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
