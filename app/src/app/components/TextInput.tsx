import React, { ChangeEvent } from "react";

interface textInputProps {
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export default function TextInput(props: textInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-600"
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        placeholder={`Enter ${props.name}`}
      />
    </div>
  );
}
