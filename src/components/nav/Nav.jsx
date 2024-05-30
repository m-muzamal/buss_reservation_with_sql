import React, { useEffect, useState } from "react";
import "./nav.css";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [sessionData, setSessionData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem('session');
    setSessionData(JSON.parse(data));
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("session");
    setSessionData({});
    alert("Are you shure you want to logout?")
    navigate("/");
  };

  return (
    <nav>
      <div className="logo">
        <a href="/home">UAF EXPRESS</a>
      </div>
      <div className="nav_link">
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>Home</a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>About</a>
        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}>Services</a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>Contact</a>
      </div>
      {sessionData && (
        <div className="user">
        <p>{sessionData.username}</p>
        <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>
      </div>
        )}
    </nav>
  );
};

export default Nav;
