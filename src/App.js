import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signin from "./components/login/singin/Signin";
import Ticketbook from "./components/ticketBook/Ticketbook";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Seat from "./components/ticketBook/seates/Seat";
import Payment from "./components/ticketBook/paymetn/Payment";
import Signup from "./components/login/signup/Signup";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      <Router>
        <Nav title="mzml" />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/ticketbook" element={<Ticketbook />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
