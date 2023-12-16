import React, { createContext, useContext, useState } from "react";
import { UserApiService } from "../services/api_services/UserApiService";

const StateContext = createContext();

export const UserContextProvider = ({ children }) => {
  const registerErrorsTemplate = {
    username: "Username must be at least 5 characters",
    email: "Invalid Email",
    password: "Must be at least 8 characters and 1 special character",
    confirmPassword: "Passwords do not match",
  };

  const [isUserLogged, setIsUserLogged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerErrors, setRegisterErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    console.log("Clicked on toggle password");
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    console.log("Clicked on toggle CONFIRM password");
    setShowConfirmPassword(!showConfirmPassword);
  };

  const registerUser = () => {
    const res = UserApiService.register(registerData);
    return res;
  };

  return (
    <StateContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        registerData,
        setRegisterData,
        registerErrors,
        setRegisterErrors,
        registerErrorsTemplate,
        showPassword,
        togglePasswordVisibility,
        showConfirmPassword,
        toggleConfirmPasswordVisibility,
        registerUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useUserContext = () => useContext(StateContext);
