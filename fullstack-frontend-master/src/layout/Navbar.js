import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            CANDLE SHOP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
 
          
          <Link className="btn btn-outline-light" to="/log-in">
            Log In
          </Link>
          <Link className="btn btn-outline-light" to="/favs">
          ❤️
          </Link>
          {/* <Link className="btn btn-outline-light" to="/to-cart">
            My Cart
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
