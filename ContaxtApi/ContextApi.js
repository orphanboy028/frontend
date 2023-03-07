import { createContext, useState } from "react";
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <MyContext.Provider value={{ isOpen, setisOpen }}>
      {children}
    </MyContext.Provider>
  );
};
