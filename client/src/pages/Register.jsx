import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/Button";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { registerValidator } from "../services/userValidators/registerValidator.js";
import Input from "../components/Input.jsx";

function Register() {
  const {
    isUserLogged,
    setIsUserLogged,
    currentColor,
    registerData,
    setRegisterData,
    registerErrors,
    setRegisterErrors,
    registerErrorsTemplate,
    registerUser,
  } = useStateContext();

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/svg/register_background.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const onChange = (e, key) => {
    const value = e.target.value;
    setRegisterData({ ...registerData, [key]: value });
  };

  const handleBlur = (e, key) => {
    if (!registerValidator.isValid(key, registerData)) {
      setRegisterErrors({
        ...registerErrors,
        [key]: registerErrorsTemplate[key],
      });
    } else {
      setRegisterErrors({
        ...registerErrors,
        [key]: "",
      });
    }
  };

  const signUp = (event) => {
    event.preventDefault();
    if (registerValidator.isValidData(registerData)) {
      const res = registerUser(registerData);
      if (res) {
        console.log("User Created Successfully");
        // TODO - pop modal for Login.
      } else {
        console.log("User creation failed");
        // TODO - pop Fail modal.
      }
    } else {
      // TODO: Pop MODAL for one of the details you've entered are wrong
      console.log("One of the details you've entered are wrong");
      alert(
        "One or more of the details you have entered are wrong.\nPlease check them and try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-300 overflow-y-auto">
      <div
        className="flex justify-center py-10 px-20 laptop:py-0 desktop:py-10 rounded-3xl bg-white laptop:min-w-fit desktop:min-w-fit h-5/6 overflow-y-auto"
        style={backgroundImageStyle}
      >
        <div className="flex flex-wrap items-center space-x-40 desktop:space-x-80 desktop:text-xl">
          <div className="flex flex-1">
            <form
              className="flex flex-col gap-3 overflow-y-auto min-w-fit min-h-fit"
              onSubmit={signUp}
            >
              <div className="flex flex-col gap-2 ">
                <h1 className=" text-5xl font-extrabold desktop:text-7xl">
                  Sign Up
                </h1>
                <p className="text-gray-400 text-md mb-7">
                  Please sign up first to use the Shift Manager
                </p>
              </div>
              <Input
                inputType="username"
                inputText="Username"
                errorMessage={registerErrors.username}
                icon={<MdOutlineMarkunreadMailbox />}
                onChange={onChange}
                handleBlur={handleBlur}
                type="text"
              />
              <Input
                inputType="email"
                inputText="Email"
                errorMessage={registerErrors.email}
                icon={<FaRegUser />}
                onChange={onChange}
                handleBlur={handleBlur}
                type="email"
              />
              <Input
                inputType="password"
                inputText="Password"
                errorMessage={registerErrors.password}
                icon={<CgPassword />}
                onChange={onChange}
                handleBlur={handleBlur}
                type="password"
              />
              <Input
                inputType="confirmPassword"
                inputText="Re-Type Password"
                errorMessage={registerErrors.confirmPassword}
                icon={<CgPassword />}
                onChange={onChange}
                handleBlur={handleBlur}
                type="password"
              />
              <div className="flex w-fit py-3 px-10 rounded-full gap-2 items-center mb-5 font-semibold bg-cyan-800 text-white ">
                <button
                  className="flex flex-2 items-center gap-5"
                  type="submit"
                >
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
                Already have a user?
              </h2>
              <p className="text-center text-gray-400">
                If you already have an account <br></br>please click the button
                below
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
