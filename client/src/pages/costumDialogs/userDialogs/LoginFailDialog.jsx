import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { FaLongArrowAltRight } from "react-icons/fa";

export const LoginFailDialog = () => {
  const { setIsLoginFailDialogOpen } = useStateContext();

  const closeModal = () => {
    setIsLoginFailDialogOpen(false);
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className=" w-96 flex flex-cols  justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-10 rounded-lg bg-white  min-w-fit"
        style={{ opacity: 1 }}
      >
        <div className=" flex justify-center flex-col items-center gap-3 min-w-fit">
          <h1 className="text-3xl font-bold">Log in falied</h1>
          <p className="text-gray-400">
            Username or password are wrong, please try again.
          </p>
          <div
            className="flex mt-10 w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 border-2 border-cyan-800 font-semibold text-cyan-800 bg-white"
            onClick={closeModal}
          >
            <button className="flex flex-2 items-center gap-5">
              <div>Close</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFailDialog;
