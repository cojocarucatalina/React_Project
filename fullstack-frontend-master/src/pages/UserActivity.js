import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Welcome() {
  const [history, setHistory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/historys`);
      setHistory(response.data);
    } catch (error) {
      console.error("Error loading history:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>User History</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">User ID</th>
              <th scope="col">Last Login</th>
              <th scope="col">Last Logout</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry.id}>
                {/* <td>{entry.id}</td> */}
                <td>{entry.userId}</td>
                <td>{entry.lastLogin}</td>
                <td>{entry.lastLogout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
