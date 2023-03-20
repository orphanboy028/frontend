import { createContext, useState } from "react";
import { getAllProductsApi } from "../Actions/ProductActions";
export const ProductContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  const getProduts = async () => {
    try {
      const result = await getAllProductsApi();
      console.log(result.data.allProducts);
      setProducts(result.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ProductContext.Provider value={{ Products, getProduts }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
