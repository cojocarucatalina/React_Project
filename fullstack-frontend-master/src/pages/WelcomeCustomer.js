// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function WelcomeCustomer() {
//   const [candles, setCandles] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     loadCandles();
//   }, []);

//   const loadCandles = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/candles");
//       setCandles(response.data);
//     } catch (error) {
//       console.error("Error loading candles:", error);
//     }
//   };

//   // const addToCart = async (id) => {
//   //   try {
//   //     await axios.add(`http://localhost:8080/candles/${id}/add-to-cart`);
//   //     loadCandles();
//   //   } catch (error) {
//   //     console.error("Error adding to cart:", error);
//   //   }
//   // };

//   const addToCart = async (userId, candleId) => {
//     try {
//       // Fetch the candle details from the backend before sending the request
//       const response = await axios.get(`http://localhost:8080/candles/${candleId}`);
//       const newCandle = response.data;
  
//       // Make a POST request to add the candle to the user's cart
//       await axios.post(`http://localhost:8080/user/${userId}/add-to-cart`, newCandle);
      
//       // Reload candles after adding to cart
//       loadCandles();
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };
  
  

//   return (
//     <div className="container">
//       <div className="py-4">
//         <h2>All Candles</h2>
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">Model</th>
//               <th scope="col">Stock</th>
//               <th scope="col">Price</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {candles.map((candle) => (
//               <tr key={candle.id}>
//                 <td>{candle.id}</td>
//                 <td>{candle.model}</td>
//                 <td>{candle.stock}</td>
//                 <td>{candle.price}</td>
//                 <td>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/view-candle/${candle.id}`}
//                   >
//                     View
//                   </Link>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/customer/${id}/favs`} //add candle here 
//                   >
//                     ❤️
//                   </Link>
//                   {/* <Link
//                     className="btn btn-outline-primary mx-2"
//                     to ={`/customer/${id}/to-cart`}
//                     //  onClick={() => addToCart(candle.id)}
//                      onClick={(e) => alert(`You added ${candle.model}!`)}
//                   >
//                     To Cart 
//                   </Link> */}
//                   {/* <Link
//                   className="btn btn-outline-primary mx-2"
//                   onClick={() => addToCart(id, candle.id) }
//                   // onClick1={(e) => alert(`You added ${candle.model}!`)}
                  
//                   > 
//                   To Cart 
//                 </Link> */}
//                 <Link
//                 className="btn btn-outline-primary mx-2"
//                 to = {`/customer/${id}/to-cart`}
//                 onClick={async () => {
//                   try {
//                     alert(`You added ${candle.model}!`)   
//                     const response = await axios.get(`http://localhost:8080/candles/${candle.id}`);
//                     const newCandle = response.data;
  
//                      // Make a POST request to add the candle to the user's cart
//                      await axios.post(`http://localhost:8080/user/${id}/add-to-cart`, newCandle);
      
//                      // Reload candles after adding to cart
//                      loadCandles();
//                     } catch (error) {
//                       console.error("Error adding to cart:", error);
//                     }
//                   }}>
                
//                   To Cart 
//               </Link>

                
//               </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function WelcomeCustomer() {
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

  const addToFavorites = async (candleId, candleModel) => {
    try {
      // Construct the favorite object to be added
      const newFavorite = {
        userId: id,
        candleId: candleId,
        candleModel: candleModel
      };

      // Make a POST request to add the candle to the user's favorites
      await axios.post("http://localhost:8080/favorite", newFavorite);
      
      // Reload candles after adding to favorites
      loadCandles();
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  
  const addToCart = async (candleId, candleModel) => {
    try {
      // Construct the favorite object to be added
      const newFavorite = {
        userId: id,
        candleId: candleId,
        candleModel: candleModel
      };

      // Make a POST request to add the candle to the user's favorites
      await axios.post("http://localhost:8080/cart", newFavorite);
      
      // Reload candles after adding to favorites
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
                    to ={`/customer/${id}/favs`}
                    onClick={() => addToFavorites(candle.id, candle.model)}
                  >
                    ❤️
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/customer/${id}/to-cart`}
                    onClick={() => addToCart(candle.id, candle.model)}
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
