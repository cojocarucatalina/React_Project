import React from "react";
import { Link } from "react-router-dom";

export default function NavCustomer({id}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
             SHOP
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
            Log in
          </Link>
          <Link className="btn btn-outline-light" to="/log-out">
            Log out
          </Link>
          <Link className="btn btn-outline-light" to={`/customer/${id}/favs`}>
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
