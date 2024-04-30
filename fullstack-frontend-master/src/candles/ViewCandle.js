import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCandle() {
  const [candle, setCandle] = useState({
    model: "",
    price: "",
    stock: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCandle();
  }, []);

  const loadCandle = async () => {
    const result = await axios.get(`http://localhost:8080/candle/${id}`);
    setCandle(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Candle Details</h2>

          <div className="card">
            <div className="card-header">
              id  : {candle.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Model:</b>
                  {candle.model}
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {candle.price}
                </li>
                <li className="list-group-item">
                  <b>Stock:</b>
                  {candle.stock}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
