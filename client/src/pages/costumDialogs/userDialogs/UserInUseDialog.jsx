import React, { useEffect } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { FaLongArrowAltRight } from "react-icons/fa";

export const UserInUseDialog = () => {
  const { isUserInUseDialogOpen, setIsUserInUseDialogOpen } = useStateContext();

  return (
    <div className="flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className=" w-96 flex flex-cols  justify-center flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-10 rounded-3xl bg-white  min-w-fit"
        style={{ opacity: 1 }}
      >
        <div className=" flex justify-center flex-col items-center gap-3 min-w-fit">
          <h1 className="text-3xl font-bold">Registration Failed</h1>
          <p className="text-gray-400">
            Email is already registered<br></br>
          </p>
          <div
            className=" mt-5 flex w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-white border-2 border-cyan-800 text-white "
            onClick={() => setIsUserInUseDialogOpen(false)}
          >
            <button className="flex flex-2 items-center gap-5 text-cyan-800">
              <div>Cancel</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInUseDialog;
