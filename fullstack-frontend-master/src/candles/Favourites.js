import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [candles, setCandles] = useState([]);
  const [favoriteCandles, setFavoriteCandles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadCandles();
    loadFavoriteCandles();
  }, []);

  const loadCandles = async () => {
    const result = await axios.get("http://localhost:8080/candles");
    setCandles(result.data);
  };

  const loadFavoriteCandles = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}/favorites`);
    setFavoriteCandles(result.data);
  };

  const deleteCandle = async (id) => {
    await axios.delete(`http://localhost:8080/candle/${id}`);
    loadCandles();
  };

  // Function to check if a candle is a favorite for the current user
  const isFavorite = (candleId) => {
    return favoriteCandles.some((candle) => candle.id === candleId);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Candlename</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candles.map((candle, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{candle.model}</td>
                <td>{candle.price}</td>
                <td>{candle.stock}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewcandle/${candle.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editcandle/${candle.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCandle(candle.id)}
                  >
                    Delete
                  </button>
                  {/* Check if the candle is a favorite */}
                  {isFavorite(candle.id) && <span>Favorite</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
