import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Please fill in all the input fields.");
    } else {
      axios
        .post("http://localhost:3001/api/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            if (email === "admin@gmail.com" && password === "admin123") {
              setIsAdmin(true);
              localStorage.setItem("session", JSON.stringify(response.data));
              navigate("/admin");
              console.log(isAdmin);
            } else {
              localStorage.setItem("session", JSON.stringify(response.data));
              navigate("/home");
            }
          } else {
            setErrorMessage("Wrong email or password!");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setErrorMessage("Wrong email or password!");
          } else {
            setErrorMessage("Something went wrong. Please try again later.");
          }
        });
    }
  };

  return (
    <div id="/signin" className="signin">
      <section className="container signin__container">
        <div className="homeText">
          <div className="logo">
            <h1>UAF EXPRESS</h1>
          </div>
          <p className="text">
            <strong>UAF Express</strong> is one of the oldest and largest
            transport companies of Pakistan. Transport business was initiated by{" "}
            <strong>Chaudhry Muzammal Dogar</strong>, grandfather of current
            C.E.O and Chairman. UAF Express Group is diversified into Public
            Transport, Logistic and Cargo.
          </p>
        </div>
        <form className="signin__form" onSubmit={handleSubmit}>
          <div className="form__container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
            <Link to="/signup" className="signupbtn">
              Don't have account?
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signin;
