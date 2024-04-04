import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

export default function Navbar({index}) {
 // const { id } = useParams();
 const [id, setId] = useState(index); // Initialize id state    

 useEffect(() => {
  // Simulating setting the id from a route parameter
  setId(id); // Replace "123" with your actual id
}, []);

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
          <Link className="btn btn-outline-light" to="/register">
            Register
          </Link>
          {/* <Link className="btn btn-outline-light" to={`/customer/${id}/favs`}>
          ❤️
          </Link> */}
          <Link className="btn btn-outline-light" to="/to-cart">
            My Cart
          </Link>
          {/* <Link className="btn btn-outline-light" to="/to-cart">
            My Cart
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
