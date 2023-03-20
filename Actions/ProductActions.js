import axios from "axios";

export const getAllProductsApi = async () => {
  try {
    return await axios.get(
      "http://127.0.0.1:5000/api/v1/produts/get-all-products",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};
