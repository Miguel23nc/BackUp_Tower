import React from "react";

const Input = ({ label, type, name, value, onChange, error, readOnly }) => {
  return (
    <div className="flex flex-col relative w-60 h-40 justify-center items-start">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        autoComplete={type}
        className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
