import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { FaLongArrowAltRight } from "react-icons/fa";

export const LoginSuccessDialog = () => {
  const { setIsLoginSuccessDialogOpen } =
    useStateContext();

  const closeModal = () => {
    setIsLoginSuccessDialogOpen(false);
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className=" w-96 flex flex-cols  justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-10 rounded-lg bg-white  min-w-fit"
        style={{ opacity: 1 }}
      >
        <div className=" flex justify-center flex-col items-center gap-3 min-w-fit">
          <h1 className="text-3xl font-bold">Logged in Successfully</h1>
          <p className="text-gray-400">
            You are being redirected to Shift Manager Dashboard
          </p>
          <div
            className="flex mt-10 w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-cyan-800 text-white"
            onClick={closeModal}
          >
            <button className="flex flex-2 items-center gap-5">
              <div>Close</div>
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

export default LoginSuccessDialog;
