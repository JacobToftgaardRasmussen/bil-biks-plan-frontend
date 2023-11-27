"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import TextInput from "./components/TextInput";

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
  const [token, settoken] = useState<string | undefined>(undefined);
  async function getAllVehicles() {
    const response = await fetch("http://localhost:5000/vehicle/all");
    const data = await response.json();
    setAllVehicles(data);
    setshowVehicles(true);
  }
  function clearResults() {
    setshowVehicles(false);
  }

  interface FormData {
    make: string | undefined;
    model: string | undefined;
    licensePlate: string | undefined;
    year: number | undefined;
    trimLevel: string | undefined;
    priceClass: number | undefined;
  }

  const [formData, setFormData] = useState<FormData>({
    make: undefined,
    model: undefined,
    licensePlate: undefined,
    year: undefined,
    trimLevel: undefined,
    priceClass: undefined,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTokenInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    settoken(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/vehicle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Form submitted successfully!");
      } else {
        // Handle error, e.g., show an error message
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="max-w-md mt-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Make */}
          <TextInput
            value={formData.make}
            onChange={handleInputChange}
            name="make"
          />
          <TextInput
            value={formData.model}
            onChange={handleInputChange}
            name="model"
          />
          <TextInput
            value={formData.licensePlate}
            onChange={handleInputChange}
            name="licensePlate"
          />
          <TextInput
            value={formData.trimLevel}
            onChange={handleInputChange}
            name="trimLevel"
          />
          <TextInput
            value={token}
            onChange={handleTokenInputChange}
            name="token"
          />

          {/* Year */}
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-600"
            >
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter year"
            />
          </div>

          {/* Price Class */}
          <div className="mb-4">
            <label
              htmlFor="priceClass"
              className="block text-sm font-medium text-gray-600"
            >
              Price Class
            </label>
            <input
              type="number"
              id="priceClass"
              name="priceClass"
              value={formData.priceClass}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter price class"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

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
