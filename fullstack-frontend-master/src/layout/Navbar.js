// import React, { useEffect, useState } from "react";

// import { Link, useParams } from "react-router-dom";

// export default function Navbar({index}) {
//  // const { id } = useParams();
//  const [id, setId] = useState(index); // Initialize id state    

//  useEffect(() => {
//   // Simulating setting the id from a route parameter
//   setId(id); // Replace "123" with your actual id
// }, []);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home">
//             CANDLE SHOP
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
 
          
//           <Link className="btn btn-outline-light" to="/log-in">
//             Log In
//           </Link>
//           <Link className="btn btn-outline-light" to="/register">
//             Register
//           </Link>
//           {/* <Link className="btn btn-outline-light" to={`/customer/${id}/favs`}>
//           ❤️
//           </Link> */}
//           <Link className="btn btn-outline-light" to={`/customer/${id}/to-cart`}>
//             My Cart
//           </Link>
//           {/* <Link className="btn btn-outline-light" to="/to-cart">
//             My Cart
//           </Link> */}
//         </div>
//       </nav>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../index.css';
import axios from "axios";
import "../button/Button.css";


export default function Navbar() {

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


  //const location = useLocation();
  //const [id, setId] = useState(null); // Initialize id state
  
  // useEffect(() => {
  //   console.log("Received id:", id);
  // }, [id]);

  
  
  // useEffect(() => {
  //   // Simulating setting the id from a route parameter
  //   setId(id); // Replace "123" with your actual id
  // }, []);

  
  const addToHistory = async (userId) => {
    try {
      const newFavorite = {
        userId: id,
        lastLogout: new Date()
      };

      await axios.post("http://localhost:8080/history", newFavorite);
      
      // Reload candles after adding to favorites
    //  loadCandles();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const renderToCartButton = () => {
    // If the current route is "/customer/admin", don't render the "To Cart" button
    if (location.pathname === "/admin") {
      return null;
    }
    // Otherwise, render the "To Cart" button
    return (
      <Link className="btn btn-outline-light" to={`/customer/${id}/to-cart`}>
        My Cart
      </Link>
    );
  };

  const renderRegistration = () => {
    // If the current route is "/customer/admin", don't render the "To Cart" button
    if (location.pathname === "/admin") {
      return null;
    }
    // Otherwise, render the "To Cart" button
    return (
      <Link className="btn btn-outline-light" to={`/customer/${id}/to-cart`}>
        My Cart
      </Link>
    );
  };


  const renderAddingCandle = () => {

    // If the current route is "/admin", render the "Add new candle" button
    if (location.pathname === "/admin") {
      return (
        <Link className="btn btn-outline-light" to={`/customer/admin/add-candle`}>
          Add new candle
        </Link>
      );
    }
    // Otherwise, don't render anything
    return null;
  };

  const renderUserActivity = () => {

    // If the current route is "/admin", render the "Add new candle" button
    if (location.pathname === "/admin") {
      return (
        <Link className="btn btn-outline-light" to={`/customer/admin/user-activity`}>
          User Activity
        </Link>
      );
    }
    // Otherwise, don't render anything
    return null;
  };



  const renderChatAdmin = () => {

    // If the current route is "/admin", render the "Add new candle" button
    if (location.pathname === "/customer//chat") {
      return (
        <Link className="btn btn-outline-light" to={`/admin/chat`}>
          ChatRoom
        </Link>
      );
    }
    // Otherwise, don't render anything
    return null;
  };
  

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info ">
        <div className="container-fluid">
          <Link className="custom-brand-style" to="/home">
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
          <Link className="btn btn-outline-light" to="/home" onClick={() => addToHistory(id)} onClick1={() => alert("Are you sure?")}>
            Log Out
          </Link>
          <Link className="btn btn-outline-light" to={`/customer/${id}/favs`}>
            Favorites
          </Link>
          <Link className="btn btn-outline-light" to={`/customer/${id}/chat`}>
            ChatRoom
          </Link>
          {/* Render the "To Cart" button based on the current route */}
          {renderToCartButton()}
          {renderAddingCandle()}
          {renderUserActivity()}
          {renderChatAdmin()}
        </div>
      </nav>
    </div>
  );
}
