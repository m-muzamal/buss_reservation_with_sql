import React from "react";
import "./services.css";
import { HiOutlineCheck } from "react-icons/hi";

const Services = () => {
  return (
    <section id="services">
      <h5>What We offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>PUBLIC TRANSPORT</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Your journey, our mission.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Save time, book online.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Hassle-free booking.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Choose your seat now.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>On-time arrivals guaranteed.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Sit back and relax.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Easy booking process.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Secure and easy booking.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Your comfort, our priority.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>We make travel easy.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Ride in comfort.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>We make travel easy.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>LOGISTICS</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>On-time deliveries guaranteed!</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Simplify your logistics needs.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Reliable logistics solutions.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Safe and secure logistics.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Fast and efficient shipping.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Competitive shipping rates.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Seamless supply chain management.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Delivering excellence every time.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Your one-stop logistics shop.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Global logistics made simple.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>We handle your logistics needs.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Efficient logistics, happy customers.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>CARGO</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Fast and secure cargo delivery.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Nationwide cargo shipping.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Door-to-door cargo service.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Reliable cargo transportation.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Affordable cargo rates.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Customizable cargo solutions.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Professional cargo handling.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Efficient cargo logistics.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Timely cargo delivery.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Safe and insured cargo transport.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Efficient freight forwarding.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Seamless cargo tracking.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
