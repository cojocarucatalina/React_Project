import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCandle() {
  let navigate = useNavigate();

  const [candle, setCandle] = useState({
    model: "",
    stock: 0,
    price: 0,
  });

  const { model, stock, price } = candle;

  const onInputChange = (e) => {
    setCandle({ ...candle, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/candle", candle);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">ADD NEW CANDLE</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter candle model"
                name="model"
                value={model}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter candle stock"
                name="stock"
                value={stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter candle price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Add Candle
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
