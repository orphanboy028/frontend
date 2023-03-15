import { createContext, useState } from "react";
export const UserContext = createContext();
import { getUser } from "../Actions/userAction";

export const UserContextProvider = ({ children }) => {
  const [user, setuser] = useState({
    name: "",
    mobileNumber: "",
    email: "",
  });

  const getUserDetails = async (token) => {
    try {
      const result = await getUser(token);
      setuser(result.data.me);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setuser, getUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
