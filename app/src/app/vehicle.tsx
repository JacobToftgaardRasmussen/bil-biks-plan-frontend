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
  async function getAllVehicles() {
    const response = await fetch("http://localhost:5000/vehicle/all");
    const data = await response.json();
    setAllVehicles(data);
  }

  return (
    <div>
      <div>
        <h2>Get all vehicles</h2>
        <button onClick={getAllVehicles}>Go!</button>
        <ul>
          {allVehicles.map((v, i) => {
            return <li key={i}>{v.licensePlate}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
