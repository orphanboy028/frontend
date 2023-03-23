import { createContext, useState } from "react";
import {
  getAllProductsApi,
  createProduct,
  getUserAllProducts,
} from "../Actions/ProductActions";
import { getCookies } from "../Actions/auth";
export const ProductContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const token = getCookies();
  const [Products, setProducts] = useState([]);
  const [userProducts, setuserProducts] = useState([]);
  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
  });

  // get All Product
  const getProduts = async () => {
    try {
      const result = await getAllProductsApi();
      console.log(result.data.allProducts);
      setProducts(result.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  // get user All Product
  const getuserProducts = async (token, _id) => {
    try {
      if (_id !== undefined) {
        const result = await getUserAllProducts(token, _id);
        setuserProducts(result.data.userProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handel Chnage
  const handelOnChnage = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async () => {
    try {
      const result = await createProduct(token, values);
      const { data } = result;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ProductContext.Provider
        value={{
          Products,
          getProduts,
          handelOnChnage,
          values,
          handelSubmit,
          getuserProducts,
          userProducts,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
