import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
//import background from "./img/candle.png";
import background from "./img/candle.png";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Navbar1 from "./layout/Navbar1";
import './index.css';

import NavCustomer from "./layout/NavCustomer";
import ViewCart from "./users/ViewCart";

import CardPayment from "./pay/CardPayment";
import Receipt from "./pay/Receipt";

import ChatRoom1 from "./ws/ChatRoom1";
import ChatRoom2 from "./ws/ChatRoom2";

import fe from "./ws/fe";
import Payment from "./pay/Payment";

import ForgotPassword from "./pages/ForgotPassword";

import ViewFav from "./users/ViewFav";
import AddCandle from "./candles/AddCandle";
import { SearchBar } from "./search/SearchBar";
import { SearchResultList } from "./search/SearchResultList";

import NavAdmin from "./layout/Navbar";
import ImageUpload from "./users/ImageUpload";

import Home from "./pages/Home";

import Welcome from "./pages/Welcome";
import Welcome1 from "./pages/Welcome1";

import WelcomeCustomer from "./pages/WelcomeCustomer";
import AddUser from "./users/AddUser";
import Register from "./users/Register";
import ToCart from "./pages/ToCart";
import LogIn from "./pages/LogIn";

import UserActivity from "./pages/UserActivity";

import AddCart from "./candles/AddCart";
import Favourites from "./candles/Favourites";
import ViewCandle from "./candles/ViewCandle";

import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Switch from './button/Switch'; 
import { Toggle } from "./button/Toggle";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ViewFavorites from "./users/ViewFavorites";

function App() {

  const [results, setResults] = useState([]);

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [id, setId] = useState(""); // Initialize id state

  useEffect(() => {
    // Simulating setting the id from a route parameter
    setId(id); 
  }, []);
 
  const aid = id;

  return (
    <div 
    style={{ 
      // backgroundColor: "#e8e8e8",
      backgroundImage: `url(${background})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
      backgroundSize: '10%',
      //width:'250px' 
    }} 
    className="App" data-theme={isDark ? "dark" : "light"}>
    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Router>
        <Navbar id={id}/> 
        {/* <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultList results={results} />}
      </div> */}
       <div className="search-container"> {/* Apply styles to this container */}
          <SearchBar setResults={setResults} /> 
          {results.length > 0 && <SearchResultList results={results} />} 
        </div>
        <Routes>
          <Route exact path="/home" element={<Welcome />} />
          <Route exact path="/admin/home" element={<Welcome1 />} />
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/add-user" element={<AddUser />} />

          <Route exact path="/to-cart" element={<ToCart />} />
          <Route exact path="/customer/undefined/favs" element={<ToCart />} /> 
          <Route exact path="/customer/undefined/to-cart" element={<ToCart />} />
          <Route exact path="/customer//to-cart" element={<ToCart />} />
          {/* <Route exact path="/customer//favs" element={<ToCart />} /> */}

          <Route exact path="/log-in" element={<LogIn />} />

          <Route exact path="/edit-user/:id" element={<EditUser />} />
          <Route exact path="/view-user/:id" element={<ViewUser />} />

          <Route exact path="/view-candle/:id" element={<ViewCandle />}/>

          <Route exact path="/customer/:id/view-cart/:id" element={<ViewCandle />}/>
     
          <Route exact path="/user-interface/:id" element={<ViewUser />} />

          <Route exact path="/home/customer" element={<NavCustomer />} />           

          <Route exact path="/register" element={<Register />} /> 

          <Route exact path="/customer/:id" element={<WelcomeCustomer />} /> 
          {/* <Route exact path="/customer//favs" element={<WelcomeCustomer />} />  */}
          <Route path="/customer//favs" element={<Navigate to="/customer/:id/favs"/>} />

          <Route path="/customer/10" element={<Navigate to="/admin" />} />
          <Route path="/customer/1" element={<Navigate to="/admin" />} />


          {/* <Route exact path="/customer/:id/favs" element={<ViewFavorites />} />  */}
          <Route exact path="/customer/:id/to-cart" element={<ViewCart />} />

          <Route exact path="/customer/:id/payment" element={<Payment />} />
          <Route exact path="/customer/:id/payment-card" element={<CardPayment />} /> 
          <Route exact path="/customer/:id/payment-cash" element={<Receipt />} />


          <Route exact path="/viewuser/:id" element={<ViewUser />} />

          <Route exact path="/admin" element={<EditUser />} /> 

          <Route exact path="/admin/add-candle" element={<AddCandle />} />
          <Route path="/customer/admin/add-candle" element={<Navigate to="/admin/add-candle" />} />

          <Route exact path="/customer/:id/favs" element={<ViewFav />} /> 

          <Route exact path="/customer/:id/home" element={<WelcomeCustomer />} /> 

          {/* <Route exact path="/customer/:id/chat" element={<ChatRoom1 />} />  */}
          <Route exact path="/customer/:id/chat" element={<ChatRoom2 />} /> 
          <Route exact path="/customer/admin/chat" element={<ChatRoom2 />} />
          
          <Route exact path="/customer/undefined/chat" element={<ToCart />} /> 

          <Route exact path="/customer/admin/user-activity" element={<UserActivity /> } />

          <Route exact path="/admin/profile" element={<ImageUpload />}/>
          <Route exact path="/customer/:id/profile" element={<ImageUpload />}/>

          <Route exact path="/customer/admin/profile" element={<ImageUpload />}/>

          <Route exact path="/customer/undefined/profile" element={<ToCart />}/> 
          
          <Route exact path="/forgot-password" element={<ForgotPassword />}/> 

        </Routes>
      </Router>

    </div>
    
  );
}
export default App; 

// import React, { useState } from "react";
// import useLocalStorage from "use-local-storage";

// import "./App.css";
// import { Toggle } from "./button/Toggle";

// export const App = () => {
//   const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const [isDark, setIsDark] = useLocalStorage("isDark", preference);

//   return (
//     <div className="App" data-theme={isDark ? "dark" : "light"}>
//       <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
//       <h1 className="title">Hello world!</h1>
//       <div className="box">
//         <h2>This is a box</h2>
//       </div>
//     </div>
//   );
// };
// export default App;

// import { useState } from "react";

// import "./App.css";
// import { SearchBar } from "./search/SearchBar";
// import { SearchResultList } from "./search/SearchResultList";

// function App() {
//   const [results, setResults] = useState([]);

//   return (
//     <div className="App">
//       <div className="search-bar-container">
//         <SearchBar setResults={setResults} />
//         {results && results.length > 0 && <SearchResultList results={results} />}
//       </div>
//     </div>
//   );
// }

// export default App;