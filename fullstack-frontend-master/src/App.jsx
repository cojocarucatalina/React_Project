// App.js

import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NavCustomer from "./layout/Navbar";
import NavAdmin from "./layout/Navbar";

import Home from "./pages/Home";

import Welcome from "./pages/Welcome";
import AddUser from "./users/AddUser";
import ToCart from "./pages/ToCart";
import LogIn from "./pages/LogIn";

import AddCart from "./candles/AddCart";
import Favourites from "./candles/Favourites";

import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Switch from './button/Switch'; 
import { Toggle } from "./button/Toggle";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Welcome />} />
          <Route exact path="/add-user" element={<AddUser />} />

          <Route exact path="/to-cart" element={<ToCart />} />
          <Route exact path="/favs" element={<Favourites />} />

          <Route exact path="/log-in" element={<LogIn />} />

          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />

          <Route exact path="/home/customer" element={<NavCustomer />} /> 
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
/*
import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { Toggle } from "./button/Toggle";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hello world!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};
export default App;*/