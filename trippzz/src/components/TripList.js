import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./Triplist.css";
const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const fecthTrips = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTrips(data);
  }, [url]);
  useEffect(() => {
    fecthTrips();
  }, [fecthTrips]);
  console.log(trips);

  return (
    <div className="trip-list">
      <h1>Trip List</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip?.title}</h3>
            <p>{trip?.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
