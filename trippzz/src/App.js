import "./App.css";
import React from "react";
import TripList from "./components/TripList";
function App() {
  return (
    <div className="App">
      <TripList />
      <p onClick={(e) => console.log("hello", e)}>Hello</p>
    </div>
  );
}

export default App;
