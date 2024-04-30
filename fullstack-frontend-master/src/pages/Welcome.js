import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Welcome() {
  const [candles, setCandles] = useState([]);
  const { id } = useParams();

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

  // const addToCart = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8080/candles/${id}/add-to-cart`);
  //     loadCandles();
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };

  const addToCart = async (id) => {
    try {
      await axios.post(`http://localhost:8080/user/${id}/add-to-cart`, {
        id: id
      });
      loadCandles();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };  

  return (
    <div className="container">
      <div className="py-4">
        <h2>All Candles</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Model</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candles.map((candle) => (
              <tr key={candle.id}>
                {/* <td>{candle.id}</td> */}
                <td>{candle.model}</td>
                <td>{candle.stock}</td>
                <td>{candle.price}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/view-candle/${candle.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    // to={`/edit-candle/${candle.id}`}
                    to={`/customer/${id}/favs`}  //aici ar trebui sa adaug in tabel??
                  >
                    ❤️
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/customer/${id}/to-cart`}
                    onClick={() => addToCart(candle.id)}
                  >
                    To Cart
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
