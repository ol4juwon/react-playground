import React, { useEffect, useState } from "react";
import "./Triplist.css";
export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  useEffect(() => {
    // if (trips.length === 0) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTrips(data));
    // }
    setTimeout(() => {
      console.log(trips);
    }, 1000);
  }, [url]);
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
}
