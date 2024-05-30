import React, { useEffect, useState } from "react";
import "./payment.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import easypaisa from "../../../assets/easypaisa.jpg";
import QR from "../../../assets/qr.jpg";

const Payment = () => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState({});
  const [sessionData1, setSessionData1] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showEasypaisa, setEasypaisa] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("session");
    setSessionData(JSON.parse(data));
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("session1");
    setSessionData1(JSON.parse(data));
  }, []);

  const getBookingDetails = () => {
    return `Bus from lahore to rajana - 10:30 - 1000Rs\n\nUser Detail\nName: ${
      sessionData.username
    }\nEmail: ${sessionData.email}\nCNIC: ${sessionData.cnic}\nPhone: ${
      sessionData.phone
    }\n\nSeats No: ${sessionData1.selectedSeats &&
      sessionData1.selectedSeats.join(", ")}\nTotal seats: ${
      sessionData1.seatlength
    }\nTotal bill: ${sessionData1.totalAmount}Rs`;
  };

  const handleConfirm = async (event) => {
    const message = `\nYou have booked seats in UAF Express\n${getBookingDetails()}`;
    event.preventDefault();
    const bookingData = {
      bookingname: sessionData.username,
      bookingphone: sessionData.phone,
      bookingcnic: sessionData.cnic,
      bookingroute: "Lahore to Rajan", // You can update this value to match your route name
      bookingdate: "23-3-2023", // You can update this value to match your booking date
      bookingseats: sessionData1.seatlength,
      bookingseatno: sessionData1.selectedSeats.join(", "),
    };
    axios
      .post("http://localhost:3001/api/booking", bookingData)
      .then((response) => {
        console.log(response.data);
        alert("You have booked your ticket successfully!");
      })
      .catch((error) => console.log(error));

    try {
      const request = await axios.post("http://localhost:3001/api/message", {
        phone_no: "+923318690265",
        message,
      });
      console.log(request);
      navigate("/ticketbook");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePayNow = () => {
    setShowPopup(true);
  }
  ;
  const handleEasypaisa = () => {
    setEasypaisa(true);
  };

  return (
    <div id="/payment" className="paymentContainer">
      <section className="container">
        <div className="payment_container">
          <div className="user_info">
            <div className="head">
              <h2>Easypaisa</h2>
            </div>
            <div className="btn easy_item">
              <img className="image" src={easypaisa} alt="pic" onClick={handleEasypaisa}/>
            </div>
          </div>

          <div className="easypaisa-payment" style={{ display: showEasypaisa ? "block" : "none" }}>
            <div className="phone-container">
              <div className="p-item">
                <div className="input">
                  <label>Enter your mobile account details Mobile Number</label>
                  <input
                    className="phone-input"
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>
                <button className="btn btn-primary" onClick={handlePayNow}>Pay Now</button>
              </div>
              <p>OR scanning the QR from your Easypaisa APP and pay now</p>
              <div className="qr-code">
                <img className="try-image" src={QR} alt="QR Code" />
              </div>
            </div>
          </div>

          <div className="payment_box">
            <div className="payment-method">
              <h2>Payment Method</h2>
              <div className="credit-card">
                <input
                  className="card-number"
                  type="text"
                  placeholder="Card Number"
                  required
                />
                <input
                  className="card-expiry"
                  type="text"
                  placeholder="MM/YY"
                  required
                />
                <input
                  className="card-cvv"
                  type="text"
                  placeholder="CVV"
                  required
                />
                <input
                  className="card-name"
                  type="text"
                  placeholder="Cardholder Name"
                  required
                />
              </div>

              <div className="payment-options">
                <label htmlFor="card">Credit Card</label>
                <input type="radio" id="card" name="payment-option" required />
                <label htmlFor="visa">Visa Card</label>
                <input type="radio" id="visa" name="payment-option" required />
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>
          </div>
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
        </div>

        <div
          className="form-container"
          style={{ display: showPopup ? "block" : "none" }}
        >
          {sessionData && (
            <div className="review">
              <h2>Review Your Booking</h2>
              <p>
                <span>Name: </span>
                {sessionData.username}
              </p>
              <p>
                <span>Email: </span>
                {sessionData.email}
              </p>
              <p>
                <span>CNIC: </span>
                {sessionData.cnic}
              </p>
              <p>
                <span>Phone: </span>
                {sessionData.phone}
              </p>
              <hr />
              <h3>Bus from lahore to rajana - 10:30 - 1000Rs</h3>
              <p>
                <span>Seats No: </span>
                {sessionData1.selectedSeats &&
                  sessionData1.selectedSeats.join(", ")}
              </p>
              <p>
                <span>Total seats: </span>
                {sessionData1.seatlength}
              </p>
              <p>
                <span>Total bill: </span>
                {sessionData1.totalAmount}Rs
              </p>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Payment;
