import React from "react";
import "./home.css";
import About from "../about/About"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="/home" className="home">
        <section className="container home_container">
          <h5 className="line">Welcome to <strong>IMRAN EXPRESS</strong></h5>
          <div className="logo">
          <h1>IMRAN EXPRESS</h1>
          </div>
          <h5 className="text"> Our user-friendly platform makes it easy for you to book your bus tickets online. Say goodbye to long queues and waiting times at the bus station. With just a few clicks, you can choose your desired bus route, view available seats, and make your reservation. We offer a wide range of bus routes to various destinations, all at affordable prices. Our system is designed to provide you with a hassle-free experience, allowing you to book your tickets anytime, anywhere. Our team is committed to ensuring your safety and comfort during your journey. So sit back, relax, and enjoy your ride with us!</h5>
          <Link to="/ticketbook" className="btn btn_ticket">
            Book Your Ticket
          </Link>
        </section>
      </div>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
