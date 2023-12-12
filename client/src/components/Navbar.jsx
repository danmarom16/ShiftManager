import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Notifications, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { FaUser } from "react-icons/fa";

const NavButton = ({ title, costumFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="ButtomCenter">
    <button
      type="button"
      onClick={costumFunc}
      style={{ color: color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-3 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    isUserProfileClicked,
    setIsUserProfileClicked,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        costumFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex ">
        <div className="hover:bg-light-gray flex ">
          <TooltipComponent content="Profile" position="BottomCenter">
            <NavButton
              title="user"
              costumFunc={() => setIsUserProfileClicked((prevVal) => !prevVal)}
              color={currentColor}
              icon={<FaUser />}
            />
          </TooltipComponent>
          <div
            className="flex items-center gap-2 cursor-pointer p-1  rounded-lg"
            onClick={() => setIsUserProfileClicked((prevVal) => !prevVal)}
          >
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">User</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </div>

        {isUserProfileClicked && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
