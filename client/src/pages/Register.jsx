import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/Button";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";

function Register() {
  const { isUserLogged, setIsUserLogged, currentColor } = useStateContext();
  // Define a style object for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/svg/register_background.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="flex  font-body justify-center items-center h-screen bg-blue-300 overflow-y-auto min-w-fit min-h-fit">
      <div
        className="flex flex-wrap justify-center w-3/4 h-5/6 p-5 rounded-3xl bg-white min-w-fit min-h-fit overflow-y-auto"
        style={backgroundImageStyle}
      >
        <div className="flex items-center space-x-40 desktop:space-x-80 desktop:text-xl sm:flex-col">
          <div className="flex flex-1">
            <form className="flex flex-col gap-3 overflow-y-auto min-w-fit min-h-fit ">
              <div className="flex flex-col gap-2 ">
                <h1 className=" text-5xl font-extrabold desktop:text-7xl">
                  Sign Up
                </h1>
                <p className="text-gray-400 text-md mb-7">
                  Please sign up first to use the Shift Manager
                </p>
              </div>
              <div className="flex gap-2 items-center mb-5 font-semibold border-b-2 hover:border-blue-400">
                <div className=" text-xl text-gray-400">{<FaRegUser />}</div>
                <input
                  className="p-2 rounded bg-none focus:outline-none "
                  placeholder="Username"
                  type="text"
                ></input>
              </div>
              <div className="flex gap-2 items-center mb-5 font-semibold border-b-2 hover:border-blue-400">
                <div className="text-gray-400 text-xl">
                  {<MdOutlineMarkunreadMailbox />}
                </div>
                <input
                  className="p-2 rounded bg-none focus:outline-none "
                  placeholder="E-mail"
                  type="e-mail"
                ></input>
              </div>
              <div className="flex gap-2 items-center mb-5 font-semibold border-b-2 hover:border-blue-400">
                <div className="text-gray-400 text-xl">{<CgPassword />}</div>
                <input
                  className="p-2 rounded bg-none  focus:outline-none"
                  placeholder="Password"
                  type="password"
                ></input>
              </div>
              <div className="flex gap-2 items-center mb-5 font-semibold border-b-2 hover:border-blue-400">
                <div className="text-gray-400 text-xl">{<CgPassword />}</div>
                <input
                  className="p-2 rounded bg-none focus:outline-none"
                  placeholder="Re-Type Password"
                  type="password"
                ></input>
              </div>
              <div className="flex w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-cyan-800 text-white ">
                <button className="flex flex-2 items-center gap-5">
                  <div>Sign Up</div>
                  <div className="font-extrabold rounded-full bg-white  p-1.5">
                    <FaLongArrowAltRight color="#155e75" />
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-1 pl-28 desktop:pl-60 border-l-2">
            <div className=" flex flex-col gap-3 items-center justify-center">
              <div className="max-w-sm ">
                <img
                  src={process.env.PUBLIC_URL + "/svg/register_alreadyUser.svg"}
                />
              </div>
              <h2 className="text-xl font-bold desktop:text-2xl">
                {" "}
                Already have a user?
              </h2>
              <p className="text-center text-gray-400">
                If you already have an accoumt, <br></br>please click on the
                button below
              </p>
              <div className="flex w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-white border-2 border-cyan-800 text-white ">
                <button className="flex flex-2 items-center gap-5 text-cyan-800">
                  <div>Sign In</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
