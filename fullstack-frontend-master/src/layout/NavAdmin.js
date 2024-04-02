import React from "react";
import { Link } from "react-router-dom";

export default function NavAdmin() {
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
 
          
          <Link className="btn btn-outline-light" to="/view-all">
            View All
          </Link>
          <Link className="btn btn-outline-light" to="/log-out">
            Log Out
          </Link>
          <Link className="btn btn-outline-light" to="/add-user">
          Add New User
          </Link>    
        </div>
      </nav>
    </div>
  );
}
