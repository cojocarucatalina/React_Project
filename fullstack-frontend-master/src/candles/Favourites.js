import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [candles, setCandles] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCandles();
  }, []);

  const loadCandles = async () => {
    const result = await axios.get("http://localhost:8080/candles");
    setCandles(result.data);
  };

  const deleteCandle = async (id) => {
    await axios.delete(`http://localhost:8080/candle/${id}`);
    loadCandles();
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
