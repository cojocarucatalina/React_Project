import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewFavorites() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [favoriteCandles, setFavoriteCandles] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUserData();
    loadFavoriteCandles();
  }, []);

  const loadUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${id}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  const loadFavoriteCandles = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${id}/favorites`);
      setFavoriteCandles(response.data);
    } catch (error) {
      console.error("Error loading favorite candles:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id: {userData.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {userData.name}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h2>Favorite Candles</h2>
            <ul>
              {favoriteCandles.map(candle => (
                <li key={candle.id}>
                  <b>Model:</b> {candle.model}, <b>Price:</b> {candle.price}
                </li>
              ))}
            </ul>
          </div>

          <Link className="btn custom-btn-admin my-3" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
