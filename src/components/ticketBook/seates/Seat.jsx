import React, { useState, useEffect } from "react";
import "./seat.css";
import { GiCarSeat } from "react-icons/gi";
import { FaFemale, FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";

const Seat = () => {
  const numRows = 10;
  const numCols = 4;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const bookedSeats = [1, 2, 3, 4, 5, 11, 12, 13];
  // const [data, setData] = useState([]);
  const [sessionData, setSessionData] = useState({});
  
  // useEffect(() => {
  //   fetch("http://localhost:3001/api/data")
  //   .then((response) => response.json())
  //   // .then((data) => setData(data))
  //     .catch((error) => console.error(error));
  // }, []);


  useEffect(() => {
    const data = localStorage.getItem('session');
    setSessionData(JSON.parse(data));
  }, []);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      setTotalAmount(totalAmount - 1000);
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
      setTotalAmount(totalAmount + 1000);
    }
  };
  
  useEffect(() => {
    const sessionData = {
      selectedSeats: selectedSeats,
      totalAmount: totalAmount,
      seatlength: selectedSeats.length
    };
    localStorage.setItem('session1', JSON.stringify(sessionData));
  },[selectedSeats, totalAmount]);

  const isBooked = (seatNumber) => {
    return bookedSeats.includes(seatNumber);
  };

  const seats = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const seatNumber = numRows - i + j * numRows;
      const isSelected = selectedSeats.includes(seatNumber);
      const isDisabled = isBooked(seatNumber);
      row.push(
        <div
          key={seatNumber}
          className={`btn ${
            isSelected ? "btn-danger" : isDisabled ? "disabled" : "btn-primary"
          } seat-number`}
          onClick={() => !isDisabled && handleSeatClick(seatNumber)}
        >
          {seatNumber}
        </div>
      );
    }
    seats.push(
      <div key={i} className="seat-row">
        {row.reverse()}
      </div>
    );
  }

  const selectedSeatsTable = selectedSeats.map((seatNumber) => {
    return (
      <tr key={seatNumber}>
        <td>
          <GiCarSeat />
          {seatNumber}
        </td>
        <td>
          <FaMale />
          <input type="radio" name={`seat-${seatNumber}`} required />
        </td>
        <td>
          <FaFemale />
          <input type="radio" name={`seat-${seatNumber}`} required />
        </td>
      </tr>
    );
  });

  return (
    <div id="/seat" className="seatContainer">
      <section className="container">
        <div className="busname">
          {/* <h1>Bus from lahore to rajana - 10:30 - 100Rs</h1> */}
        </div>
        <div className="seat_container">
          <div className="summary">
            <div className="booking_summary">
              <div className="head">
                <h2>Booking Summary</h2>
              </div>
              <div className="data">
                <div className="data_item">
                  <p>Selected Seat:</p>
                  <span id="selected_seat">{selectedSeats.join(", ")}</span>
                </div>
                <div className="data_item">
                  <p>Total Seats:</p>
                  <span id="total_seats">{selectedSeats.length}</span>
                </div>
                <div className="data_item">
                  <p>Total Bill:</p>
                  <span id="total_seats">{totalAmount}Rs</span>
                </div>
              </div>
            </div>

            <div className="user_infor">
              <table>
                <tbody>
                  <tr className="head_table">
                    <th>Seat No.</th>
                    <th>Male</th>
                    <th>Female</th>
                  </tr>
                  {selectedSeatsTable}
                </tbody>
              </table>
            </div>
          </div>

          <div className="seats">
            <div className="head">
              <h2>Select your seat</h2>
            </div>
            <div className="seat">
              <div className="bus">{seats.reverse()}</div>
            </div>
          </div>

          <div className="summary">
            <div className="user_info">
              <div className="head">
                <h2>User Information</h2>
              </div>
              {/* {data.map((index) => ( */}
              {/* key={index.id} */}
              {sessionData && (
              <form className="data">
                  <div className="form-group">
                    <p className="userdata">Name:</p>
                    <p>{sessionData.username}</p>
                  </div>
                  <div className="form-group">
                    <p className="userdata">Email:</p>
                    <p>{sessionData.email}</p>
                  </div>
                  <div className="form-group">
                    <p className="userdata">CNIC:</p>
                    <p>{sessionData.cnic}</p>
                  </div>
                  <div className="form-group">
                    <p className="userdata">Phone:</p>
                    <p>{sessionData.phone}</p>
                  </div>
                </form>
              )}
            </div>
            <div className="subButton">
              <Link to="/payment" className="btn btn-primary">
                Confirm Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seat;
