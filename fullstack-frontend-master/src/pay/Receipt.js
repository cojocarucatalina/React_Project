import React from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import backgroundImage from "../img/plaid.jpg"; 
import "../index.css";

export default function Receipt() {
  const generateReceipt = () => {
    const doc = new jsPDF();

    const now = new Date();
    const dateTime = now.toLocaleString();

    const customerId = "123"; 

    const content = `Receipt
Date/Time: ${dateTime}
Customer ID: ${customerId}`;

    doc.text(content, 10, 10);

    doc.save("receipt.pdf");
  };

  return (
     <div style={styles.container}>
       <div style={styles.content}>
        <h1 style={styles.text}>Thank you for buying</h1>
       {/* </div></div> <h1 >Thank you for buying</h1> */}

        <Link to="/home" className="send-button">
          Go to Home
        </Link>
        <Link className="send-button" onClick={generateReceipt}>Generate Receipt</Link>
      </div>
    </div>
  );
}

 const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  linkButton: {
    padding: "10px 20px",
    background: "blue",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    marginRight: "10px",
  },
};
