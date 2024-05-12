// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function ViewCart() {
//   const [carts, setCarts] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     loadCarts();
//   }, [id]); // Load carts whenever id changes

//   const loadCarts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/carts");
//       const filteredCarts = response.data.filter(cart => cart.userId === parseInt(id));
//       setCarts(filteredCarts);
//     } catch (error) {
//       console.error("Error loading carts:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <h2>All Carts for User {id}</h2>
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               {/* <th scope="col">ID</th> */}
//               <th scope="col">User ID</th>
//               <th scope="col">Candle ID</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {carts.map((cart) => (
//               <tr key={cart.id}>
//                 {/* <td>{cart.id}</td> */}
//                 <td>{cart.userId}</td>
//                 <td>{cart.candleId}</td>
//                 <td>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/customer/${id}/view-cart/${cart.id}`}
//                   >
//                     View
//                   </Link>
//                 </td>
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

export default function ViewCart() {
  const [carts, setCarts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadCarts();
  }, [id]); // Load carts whenever id changes

  const loadCarts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/carts?userId=${id}`);
      setCarts(response.data);
    } catch (error) {
      console.error("Error loading carts:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete(`http://localhost:8080/del-carts?userId=${carts.userId}`);
      // After deletion, reload the carts
      loadCarts();
    } catch (error) {
      console.error("Error deleting carts:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>All Carts for User {id}</h2>
        <Link 
        className="btn btn-danger mb-3" 
        to={`/customer/${id}/payment`}
        // onClick={handleDeleteAll}
        
        >
        Proceed with the order
        </Link>
        <table className="table border shadow">
          <thead>
            <tr>
              {/* <th scope="col">User ID</th> */}
              <th scope="col">Candle ID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.id}>
                {cart.userId === parseInt(id) && (
                  <>
                    {/* <td>{cart.userId}</td> */}
                    <td>{cart.candleId}</td>
                    <td>
                      <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/customer/${id}/view-cart/${cart.candleId}`}
                      >
                        View
                      </Link>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Link
        className="btn btn-outline-primary mx-2"
        to={`/customer/${id}/home`}
        >
        All products
        </Link>
      </div>
    </div>
  );
}