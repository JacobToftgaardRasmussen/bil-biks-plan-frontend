import { ChangeEvent, FormEvent, useState } from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";

export default function RentalAgreement() {
  interface CheckAvailabilityInput {
    licensePlate: string;
    startTime: Date;
    endTime: Date;
  }

  const [checkAvailabilityInput, setcheckAvailabilityInput] =
    useState<CheckAvailabilityInput>({
      licensePlate: "",
      startTime: new Date("2023-11-01"),
      endTime: new Date("2023-11-08"),
    });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setcheckAvailabilityInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log(checkAvailabilityInput);

      const response = await fetch(
        "http://localhost:5000/rentalAgreement/checkAvailability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(checkAvailabilityInput),
        }
      );

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
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Make */}
      <TextInput
        type="text"
        value={checkAvailabilityInput.licensePlate}
        onChange={handleInputChange}
        name="licensePlate"
      />
      <DateInput
        value={checkAvailabilityInput.startTime}
        onChange={handleInputChange}
        name="startTime"
      />
      <DateInput
        value={checkAvailabilityInput.endTime}
        onChange={handleInputChange}
        name="endTime"
      />

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
  );
}
