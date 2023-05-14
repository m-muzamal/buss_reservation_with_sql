import React, { useState } from "react";
import "./ticketbook.css";
import BusList from "./busdata/Busdata";

const Ticketbook = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [showBuses, setShowBuses] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowBuses(true);
  };
  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
    sessionStorage.setItem("selectedBus", JSON.stringify(bus));
  };
  
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    localStorage.setItem("selectedDate", selectedDate);
  };

  return (
    <div id="/ticketbook" className="ticket">
      <section className="container">
        <div className="ticket__container">
          <div className="logo">
            <h1>IMRAN EXPRESS</h1>
          </div>
          <p className="ticketText">Find a bus and book your seats.</p>
          <form className="ticketbox" onSubmit={handleFormSubmit}>
            <div className="selection">
              <label htmlFor="from">From</label>
              <select
                id="from"
                name="from"
                required
                value={from}
                onChange={(event) => setFrom(event.target.value)}
              >
                <option value="">Select city</option>
                <option value="Gojra">Gojra</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Rajana">Rajana</option>
                <option value="Kamalia">Kamalia</option>
                <option value="Toba Tek Singh">Toba Tek Singh</option>
                <option value="Multan">Multan</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Jhang">Jhang</option>
                <option value="other">Other...</option>
              </select>
            </div>
            <div className="selection">
              <label htmlFor="to">To</label>
              <select
                id="to"
                name="to"
                required
                value={to}
                onChange={(event) => setTo(event.target.value)}
              >
                <option value="">Select city</option>
                <option value="Gojra">Gojra</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Rajana">Rajana</option>
                <option value="Kamalia">Kamalia</option>
                <option value="Toba Tek Singh">Toba Tek Singh</option>
                <option value="Multan">Multan</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Jhang">Jhang</option>
                <option value="other">Other...</option>
              </select>
            </div>
            <div className="selection">
              <label htmlFor="date">Date</label>
              <input
                className="date"
                type="date"
                value={date}
                required
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary findbus">
              Find Bus
            </button>
          </form>
          <div className="output">
            {showBuses && (
              <BusList
                from={from}
                to={to}
                selectedBus={selectedBus}
                onSelectBus={handleSelectBus}
                onClick={handleDateChange}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ticketbook;
