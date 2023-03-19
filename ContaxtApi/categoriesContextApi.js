import { createContext, useState } from "react";
import { getAllCategories } from "../Actions/categoriesAction";
export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setcategories] = useState([]);

  const getCategories = async () => {
    try {
      const result = await getAllCategories();

      setcategories(result.data.allCategories);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(categories);
  return (
    <>
      <CategoriesContext.Provider
        value={{ categories, setcategories, getCategories }}
      >
        {children}
      </CategoriesContext.Provider>
    </>
  );
};
