import React from "react";
import "../style/navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="navbar container-fluid">
        <div className="logo">
          <h3>NEXT.JS</h3>
        </div>

        <div className="serach">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="items ">
          <ul className="list-ul ">
            <li className="list-li">
              <Link href="home">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="help">Help</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
