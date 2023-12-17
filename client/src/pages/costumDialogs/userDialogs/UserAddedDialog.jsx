import React, { useEffect } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

export const UserAddedDialog = () => {
  const {
    isUserAddedDialogOpen,
    setIsUserAddedDialogOpen,
    isRegisterSuccess,
    setIsRegisterSuccess,
  } = useStateContext();


  const redirectToLogin = () => {
    setIsRegisterSuccess(true);
    setIsUserAddedDialogOpen(false);
    // NAVIGATION HAPPENS IN APP.js
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className=" w-96 flex flex-cols  justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-10 rounded-lg bg-white  min-w-fit"
        style={{ opacity: 1 }}
      >
        <div className=" flex justify-center flex-col items-center gap-3 min-w-fit">
          <h1 className="text-3xl font-bold">User Created Successfully !</h1>
          <p className="text-gray-400">Click on the button below to Sign In</p>
          <div
            className="flex mt-10 w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-cyan-800 text-white"
            onClick={redirectToLogin}
          >
            <button className="flex flex-2 items-center gap-5">
              <div>Sign In</div>
              <div className="font-extrabold rounded-full bg-white  p-1.5">
                <FaLongArrowAltRight color="#155e75" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddedDialog;
