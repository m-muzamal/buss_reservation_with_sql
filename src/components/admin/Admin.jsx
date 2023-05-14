import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./admin.css";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/booking")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="/admin" className="admin">
      <section className="container">
        <div className="admin_container">
          <h1>Booking Details</h1>
          <table className="admin_table">
            <thead className="table_heads">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>CNIC</th>
                <th>Route</th>
                <th>Date</th>
                <th>Seats</th>
                <th>Seat No</th>
              </tr>
            </thead>
            {data.map((detail) => (
              <tbody key={uuidv4()}>
                <tr>
                  <td>{detail.bookingname}</td>
                  <td>{detail.bookingphone}</td>
                  <td>{detail.bookingcnic}</td>
                  <td>{detail.bookingroute}</td>
                  <td>{detail.bookingdate}</td>
                  <td>{detail.bookingseats}</td>
                  <td>{detail.bookingseatno}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default Admin;
