import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/data", {
        username: username,
        password: password,
        email: email,
        phone: phone,
        cnic: cnic,
      })
      .then((response) => {
        console.log(response.data);
        alert("Sign UP successfully!");
        setUsername("");
        setPassword("");
        setEmail("");
        setPhone("");
        setCnic("");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div id="/signup" className="signup">
      <section className="container sectionContainer">
        <div className="signup__container">
          <form>
            <label className="lable" htmlFor="phone">
              Phone No.
            </label>
            <input
              className="input"
              type="tel"
              placeholder="+92 00000000"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <label className="lable" htmlFor="phone">
              CNIC.
            </label>
            <input
              className="input"
              type="text"
              placeholder="xxxx-xxxxxxx-x"
              required
              onChange={(e) => {
                setCnic(e.target.value);
              }}
            />

            <label className="lable" htmlFor="email">
              UserName
            </label>
            <input
              className="input"
              type="text"
              id="username"
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label className="lable" htmlFor="name">
              Email
            </label>
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label className="lable" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
