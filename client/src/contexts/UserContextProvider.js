import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useUserContext = () => useContext(StateContext);
