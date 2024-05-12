import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { js2xml } from 'xml-js'; // Import the js2xml function

export default function Welcome1() {
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

  // Function to convert candles array to XML
  const convertToXML = (candles) => {
    const xmlData = {
      candles: {
        candle: candles.map(candle => ({
          id: {_text: candle.id},
          model: {_text: candle.model},
          stock: {_text: candle.stock},
          price: {_text: candle.price},
        }))
      }
    };
    return js2xml(xmlData, {compact: true, spaces: 2});
  };

  // Function to handle export to XML
  const exportToXML = () => {
    const xmlString = convertToXML(candles);
    const element = document.createElement("a");
    const file = new Blob([xmlString], {type: 'text/xml'});
    element.href = URL.createObjectURL(file);
    element.download = "candles.xml";
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>All Candles</h2>
        <button className="btn btn-outline-primary mb-3" onClick={exportToXML}>Export to XML</button>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candles.map((candle) => (
              <tr key={candle.id}>
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
                    to={`/customer/${id}/favs`}
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
