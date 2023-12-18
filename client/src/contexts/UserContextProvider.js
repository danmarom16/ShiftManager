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

  const [isUserAddedDialogOpen, setIsUserAddedDialogOpen] = useState(false);
  const [isUserInUseDialogOpen, setIsUserInUseDialogOpen] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const [loggedUserID, setLoggedUserId] = useState("");
  const [isLoginSuccessDialogOpen, setIsLoginSuccessDialogOpen] =
    useState(false);
  const [isLoginFailDialogOpen, setIsLoginFailDialogOpen] = useState(false);

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

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    console.log("Clicked on toggle password");
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    console.log("Clicked on toggle CONFIRM password");
    setShowConfirmPassword(!showConfirmPassword);
  };

  const registerUser = async () => {
    return await UserApiService.register(registerData);
  };

  const loginUser = async () => {
    try {
      const res = await UserApiService.login(loginData);
      console.log(res);
      if (res.status === 200) {
        console.log("Login Succeed");
        setIsLoginSuccessDialogOpen(true);
        setLoggedUserId(res.data.id);
      }
    } catch (error) {
      if (error.response.status === 400) {
        console.log("Login Failed");
        setIsLoginFailDialogOpen(true);
      } else if (error.response.status === 500) {
        console.log("Internal Server Error");
      }
    }
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
        isUserAddedDialogOpen,
        setIsUserAddedDialogOpen,
        isUserInUseDialogOpen,
        setIsUserInUseDialogOpen,
        isRegisterSuccess,
        setIsRegisterSuccess,
        isLoginSuccessDialogOpen,
        setIsLoginSuccessDialogOpen,
        loginData,
        setLoginData,
        loginUser,
        isLoginFailDialogOpen,
        setIsLoginFailDialogOpen,
        loggedUserID,
        setLoggedUserId,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useUserContext = () => useContext(StateContext);
