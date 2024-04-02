import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    loadCandles();
  }, []);

  const loadCandles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/candles");
      setCandles(response.data);
    } catch (error) {
      console.error("Error loading candles:", error);
    }
  };

  const deleteCandle = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/candles/${id}`);
      loadCandles();
    } catch (error) {
      console.error("Error deleting candle:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>All Candles</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Model</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candles.map((candle) => (
              <tr key={candle.id}>
                <td>{candle.id}</td>
                <td>{candle.model}</td>
                <td>{candle.stock}</td>
                <td>{candle.price}</td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
