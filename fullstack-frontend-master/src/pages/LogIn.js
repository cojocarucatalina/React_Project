import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../button/Button.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { id, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
         `http://localhost:8080/userEmail?email=${email}&password=${password}`
        //`http://localhost:8080/customerEmail?email=${email}&password=${password}` 
      );

      const loggedInUser = response.data;

      if (loggedInUser) {
        console.log("Login successful:", loggedInUser);
        // Store email in local storage
        localStorage.setItem('loggedInEmail', email);
        const role = await axios.get(
            `http://localhost:8080/role?email=${email}&password=${password}`
        );
        if (role.data === "ADMIN") {
          navigate("/view-admin");
        } else {
          navigate("/home");
        }
      } else {
        console.error("Login failed");
        setErrorMessage("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/userEmail?email=${email}&password=${password}`
  //     );
  
  //     const loggedInUser = response.data;
  
  //     if (loggedInUser) {
  //       console.log("Login successful:", loggedInUser);
  //       // Store email in local storage
  //       localStorage.setItem('loggedInEmail', email);
        
  //       // Prepare data for saving in history table
  //       const historyData = {
  //         userId: loggedInUser.id,
  //         lastLogin: new Date().toISOString() // current date and time
  //       };
  
  //       // Send POST request to save in history table
  //       await axios.post("http://localhost:8080/history", historyData);
        
  //       const role = await axios.get(
  //         `http://localhost:8080/role?email=${email}&password=${password}`
  //       );
  //       if (role.data === "ADMIN") {
  //         navigate("/view-admin");
  //       } else {
  //         navigate("/home");
  //       }
  //     } else {
  //       console.error("Login failed");
  //       setErrorMessage("Incorrect email or password. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     setErrorMessage("An error occurred during login. Please try again later.");
  //   }
  // };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login Form</h2>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          

          <form onSubmit={(e) => onSubmit(e)}>

          <div className="mb-3">
              <label htmlFor="Id" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary custom-btn-primary">
            <Link className="mx-2" to={`/customer/${id}`}>
              Log-In
            </Link>           
            </button>
            <div/><div/>
            <div className="mb-3">
            <Link className="mx-2" to={`/forgot-password`}>
            Forgot your password?
            </Link>
            </div>

            <div style={{ marginTop: '15px' }}> 
              You don't have an account?
              <Link className="mx-2" to="/register">
                 Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
