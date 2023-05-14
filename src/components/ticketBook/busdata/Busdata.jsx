import React from 'react';
import './busdata.css';
import { Link } from 'react-router-dom';

const Busdata = ({ from, to }) => {
  // Dummy bus data
  const buses = [
    { from: 'Lahore', to: 'Rajana', time: '10:00 AM', rupe: '1000' },
    { from: 'Lahore', to: 'Rajana', time: '12:00 PM', rupe: '1000'},
    { from: 'Lahore', to: 'Rajana', time: '2:00 PM', rupe: '1000'},
    { from: 'Lahore', to: 'Toba Tek Singh', time: '11:00 AM', rupe: '1200'},
    { from: 'Lahore', to: 'Toba Tek Singh', time: '1:00 PM', rupe: '1200' },
    { from: 'Lahore', to: 'Toba Tek Singh', time: '3:00 PM', rupe: '1200' },
    { from: 'Lahore', to: 'Faisalabad', time: '9:00 AM', rupe: '600' },
    { from: 'Lahore', to: 'Faisalabad', time: '11:00 AM', rupe: '600' },
    { from: 'Lahore', to: 'Faisalabad', time: '1:00 PM', rupe: '600' },
    { from: 'Rajana', to: 'Lahore', time: '2:30 PM', rupe: '1000' },
    { from: 'Rajana', to: 'Lahore', time: '9:30 PM', rupe: '1000' },
    { from: 'Rajana', to: 'Lahore', time: '10:45 PM', rupe: '1000' },
    { from: 'Rajana', to: 'Faisalabad', time: '1:00 PM', rupe: '300' },
    { from: 'Rajana', to: 'Faisalabad', time: '2:00 PM', rupe: '3000' },
    { from: 'Rajana', to: 'Toba Tek Singh', time: '3:00 PM', rupe: '100' },
    { from: 'Gojra', to: 'Faisalabad', time: '7:00 AM', rupe: '200' },
    { from: 'Gojra', to: 'Faisalabad', time: '8:00 AM', rupe: '200' },
    { from: 'Gojra', to: 'Faisalabad', time: '8:45 AM', rupe: '200' },
  ];

  const handleClick = (bus) => {
    sessionStorage.setItem('busDetails', JSON.stringify(bus));
  };

  const filteredBuses = buses.filter(bus => bus.from === from && bus.to === to);

  return (
    <div className='busdata'>
      {filteredBuses.length > 0 ? (
        <div>
          <h2>Buses from {from} to {to}</h2>
          <ul className='buslist'>
            {filteredBuses.map((bus, index) => (
              <Link to='/seat' onClick={() => handleClick(bus)}  className='btn btn_seat' key={index}>{`Buses from ${bus.from} to ${bus.to} - ${bus.time} - ${bus.rupe}Rs`}</Link>
            ))}
          </ul>
        </div>
      ) : (
        <p>No buses found from {from} to {to}</p>
      )}
    </div>
  );
};

export default Busdata;
