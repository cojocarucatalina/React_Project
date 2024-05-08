import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar1() {
  const location = useLocation();
  const [id, setId] = useState(""); // Initialize id state

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const thirdSegment = pathSegments[2]; // Get the third segment of the path
    setId(thirdSegment);
  }, [location.pathname]);

  useEffect(() => {
    console.log("Received id:", id);
  }, [id]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            CANDLE SHOP {id} ?
          </Link>
          {/* Example of using the id */}
          <div>{id && <p>ID: {id}</p>}</div>
          {/* Your other navigation links */}
        </div>
      </nav>
    </div>
  );
}
