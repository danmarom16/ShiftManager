import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/Button";
import { FaRegUser } from "react-icons/fa";
import { CgPassword } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import LoginFailDialog from "../pages/costumDialogs/userDialogs/LoginFailDialog";
import LoginSuccessDialog from "../pages/costumDialogs/userDialogs/LoginSuccessDialog";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";

function Login() {
  const {
    isUserLogged,
    setIsUserLogged,
    currentColor,
    isLoginSuccessDialogOpen,
    setIsLoginSuccessDialogOpen,
    loginData,
    setLoginData,
    loginUser,
    isLoginFailDialogOpen,
    setIsLoginFailDialogOpen,
  } = useStateContext();

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/svg/register_background.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navigate = useNavigate();

  const onChange = (e, key) => {
    const value = e.target.value;
    setLoginData({ ...loginData, [key]: value });
  };

  const login = async (event) => {
    event.preventDefault();
    await loginUser();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-300 overflow-y-auto">
      <div
        className="flex justify-center py-10 px-20 laptop:py-0 desktop:py-10 rounded-3xl bg-white laptop:min-w-fit desktop:min-w-fit h-5/6 overflow-y-auto"
        style={backgroundImageStyle}
      >
        <div className="flex flex-wrap items-center space-x-40 desktop:space-x-80 desktop:text-xl">
          <div className="flex flex-1">
            <form className="flex flex-col gap-3 overflow-y-auto min-w-fit min-h-fit ">
              <div className="flex flex-col gap-2 ">
                <h1 className=" text-5xl font-extrabold desktop:text-7xl">
                  Sign In
                </h1>
                <p className="text-gray-400 text-md mb-7">
                  Please sign in to use the Shift Manager
                </p>
              </div>
              <Input
                inputType="email"
                inputText="Email"
                icon={<MdOutlineMarkunreadMailbox />}
                onChange={onChange}
                type="text"
                errorMessage=""
                handleBlur={() => {}}
              />
              <Input
                inputType="password"
                inputText="Password"
                errorMessage=""
                icon={<CgPassword />}
                onChange={onChange}
                type="password"
                handleBlur={() => {}}
              />
              <div className="flex w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-cyan-800 text-white ">
                <button
                  className="flex flex-2 items-center gap-5"
                  onClick={login}
                >
                  <div>Sign In</div>
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
                Dont have an account yet ?
              </h2>
              <p className="text-center text-gray-400">
                If you don't have an account already<br></br>Please sign up
                first
              </p>
              <div className="flex w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-white border-2 border-cyan-800 text-white ">
                <button
                  onClick={() => navigate("/register")}
                  className="flex flex-2 items-center gap-5 text-cyan-800"
                >
                  <div>Sign Up</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoginSuccessDialogOpen && <LoginSuccessDialog />}
      {isLoginFailDialogOpen && <LoginFailDialog />}
    </div>
  );
}

export default Login;
