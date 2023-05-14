import React from "react";
import "./about.css";
import about from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRuleFolder } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5 className="line">Get to know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experianced Derivers and Hostess</h5>
              <small>2+ Years Working</small>
            </div>

            <div className="about__card">
              <FaUsers className="about__icon" />
              <h5>Exceeding customer expectations</h5>
              {/* <small>300+ Worldwide</small> */}
            </div>

            <div className="about__card">
              <MdOutlineRuleFolder className="about__icon" />
              <h5>Convenient bus routes</h5>
              <small>80+ Routes</small>
            </div>
          </div>

          <p className="text">
            <strong>Imran Express</strong> is one of the oldest and largest
            transport companies of Pakistan. Transport business was initiated by{" "}
            <strong>Chaudhry Muzammal Dogar</strong>, grandfather of current
            C.E.O and Chairman. Imran Express Group is diversified into Public
            Transport, Logistic and Cargo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
