import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import { LineWave } from "react-loader-spinner";
import "./Triplist.css";
const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips, isLoading } = useFetch(url);

  // const fecthTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setTrips(data);
  // }, [url]);
  // useEffect(() => {
  //   fecthTrips();
  // }, [fecthTrips]);

  return (
    <div className="trip-list">
      <h1>Trip List</h1>
      <ul>
        {isLoading ? (
          <LineWave />
        ) : (
          trips?.map((trip) => (
            <li key={trip.id}>
              <h3>{trip?.title}</h3>
              <p>{trip?.price}</p>
            </li>
          ))
        )}
      </ul>
      <div id="filter" className="filters">
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
