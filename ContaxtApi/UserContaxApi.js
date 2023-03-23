import { createContext, useState } from "react";
export const UserContext = createContext();
import { getUser, getAllUsers } from "../Actions/userAction";

export const UserContextProvider = ({ children }) => {
  const [allusers, setallusers] = useState([]);
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

  const getusers = async (token) => {
    try {
      const result = await getAllUsers(token);
      // console.log(result);
      setallusers(result.data.allUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setuser, getUserDetails, allusers, setallusers, getusers }}
    >
      {children}
    </UserContext.Provider>
  );
};
