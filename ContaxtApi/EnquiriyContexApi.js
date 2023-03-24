import { createContext, useState } from "react";
import {
  createEnquiriyAction,
  getallProductEnquiryAction,
} from "../Actions/enquiriyAction";
import { getCookies } from "../Actions/auth";

export const EnqiriyContext = createContext();

export default function EnquiriyContextProvider({ children }) {
  const token = getCookies();
  const [enquries, setenquries] = useState([]);

  const createEnquiry = async (slug) => {
    try {
      const result = await createEnquiriyAction(token, slug);
      alert("Enqiry sent");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllEnquiry = async () => {
    try {
      const result = await getallProductEnquiryAction(token);
      // console.log(result.data.allEnquiry);
      setenquries(result.data.allEnquiry);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <EnqiriyContext.Provider
        value={{ enquries, createEnquiry, getAllEnquiry }}
      >
        {children}
      </EnqiriyContext.Provider>
    </>
  );
}
