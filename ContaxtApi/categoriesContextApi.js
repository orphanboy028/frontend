import { createContext, useState } from "react";
import { getAllCategories } from "../Actions/categoriesAction";
export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setcategories] = useState([]);

  const getCategories = async () => {
    try {
      const result = await getAllCategories();
      console.log(result.data.allCategories);
      setcategories(result.data.allCategories);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CategoriesContext.Provider value={{ getCategories }}>
        {children}
      </CategoriesContext.Provider>
    </>
  );
};
