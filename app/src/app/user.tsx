import { useState, ChangeEvent, FormEvent } from "react";
import TextInput from "./components/TextInput";

export default function User() {
  interface LoginInfo {
    userName: string;
    password: string;
  }

  const [loginInfo, setloginInfo] = useState<LoginInfo>({
    userName: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setloginInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log(loginInfo);

      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
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
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Make */}
      <TextInput
        value={loginInfo.userName}
        onChange={handleInputChange}
        name="userName"
      />
      <TextInput
        type="password"
        value={loginInfo.password}
        onChange={handleInputChange}
        name="password"
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
