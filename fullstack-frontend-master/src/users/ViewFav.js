import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewFav() {
  const [favorites, setFavorites] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:8080/favorites");
      // Convert id to number before comparison
      const userId = parseInt(id); // or const userId = Number(id);
      setFavorites(response.data.filter(favorite => favorite.userId === userId));
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };
  

  const addToCart = async (id) => {
    try {
      await axios.post(`http://localhost:8080/favorite/${id}/add-to-fav`);
      loadFavorites();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };  

  return (
    <div className="container">
      <div className="py-4">
        <h2>All Favorites for user {id}</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">User ID</th>
              <th scope="col">Candle ID</th>
              <th scope="col">Candle Model</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((favorite) => (
              <tr key={favorite.id}>
                {/* <td>{favorite.id}</td> */}
                <td>{favorite.userId}</td>
                <td>{favorite.candleId}</td>
                <td>{favorite.candleModel}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/customer/${favorite.userId}/favs`}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-outline-primary mx-2"
                    onClick={() => addToCart(favorite.id)}
                  >
                    To Cart
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
