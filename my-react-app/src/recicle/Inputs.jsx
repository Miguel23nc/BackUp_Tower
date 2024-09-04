import React from "react";
import { Password } from "primereact/password";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Input = (props) => {
  const { label, type, name, value, onChange, error, width } = props;
  let content = null;
  switch (name) {
    case "password":
      content = (
        <Password
          value={value}
          onChange={onChange}
          name="password"
          toggleMask
          inputClassName={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          feedback={false}
        />
      );
      break;
    case "phoneCode":
      content = (
        <PhoneInput
          onChange={onChange}
          className="rounded-md w-[120px] px-2"
          international
          countryCallingCodeEditable={false}
          defaultCountry="PE"
          value={value}
        />
      );
      break;
    default:
      content = (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={type}
          {...props}
          className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
      );
      break;
  }
  return (
    <div
      className={`flex flex-col ${width ? width : "min-w-60  ml-8"} mr-2 relative  h-20 justify-center items-star`}
    >
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {content}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
