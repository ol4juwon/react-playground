import React, { useEffect, useState } from "react";
import "./Triplist.css";
export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (trips.length === 0) {
      fetch("http://localhost:3000/trips")
        .then((response) => response.json())
        .then((data) => setTrips(data));
    }
    console.log(trips);
  }, [trips]);
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
    </div>
  );
}
