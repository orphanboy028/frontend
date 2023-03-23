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

export const createProduct = async (token, data) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/api/v1/produts/creat-product",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};

export const getUserAllProducts = async (token, _id) => {
  try {
    return await axios.get(
      `http://127.0.0.1:5000/api/v1/admin/get-user-products/${_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};
