import React, { useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

function Input({
  errorMessage,
  icon,
  inputType,
  onChange,
  handleBlur,
  inputText,
  type,
}) {
  const {
    showPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    showConfirmPassword,
  } = useStateContext();

  const getInputType = () => {
    if (inputType === "password") {
      return showPassword ? "text" : "password";
    }
    if (inputType === "confirmPassword") {
      return showConfirmPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className={`flex flex-col gap-2 ${errorMessage === "" && "mb-5"}`}>
      <div
        className={`flex flex-wrap items-center font-semibold border-b-2 hover:border-blue-400 ${
          errorMessage !== "" && "border-red-500 hover:border-red-500"
        }`}
      >
        <div className=" text-xl text-gray-400">{icon}</div>
        <input
          className="p-2 rounded bg-none focus:outline-none "
          placeholder={inputText}
          type={getInputType()}
          onChange={(event) => onChange(event, inputType)}
          onBlur={(event) => handleBlur(event, inputType)}
        ></input>
        {inputType === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className="text-xl text-gray-400 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
        {inputType === "confirmPassword" && (
          <div
            onClick={toggleConfirmPasswordVisibility}
            className="text-xl text-gray-400 cursor-pointer"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
      {errorMessage != "" && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default Input;
