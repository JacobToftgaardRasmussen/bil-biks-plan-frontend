"use client";
import { useState } from "react";

interface Vehicle {
  licensePlate: String;
  make: String;
  model: String;
  year: number;
  trimLevel?: String;
  priceClass: number;
}

export default function Vehicle() {
  const [allVehicles, setAllVehicles] = useState<Vehicle[]>([]);
  const [showVehicles, setshowVehicles] = useState<boolean>(false);
  async function getAllVehicles() {
    const response = await fetch("http://localhost:5000/vehicle/all");
    const data = await response.json();
    setAllVehicles(data);
    setshowVehicles(true);
  }
  function clearResults() {
    setshowVehicles(false);
  }

  return (
    <div>
      <div>
        <h2>Get all vehicles</h2>
        <button onClick={getAllVehicles} className="btn btn-primary">
          Go!
        </button>
        <button onClick={clearResults} className="btn btn-secondary">
          Clear results
        </button>

        <ul hidden={!showVehicles}>
          {allVehicles.map((v, i) => {
            return <li key={i}>{v.licensePlate}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
