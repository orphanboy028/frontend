import axios from "axios";

export const getAllCategories = async () => {
  try {
    return await axios.get(
      "http://127.0.0.1:5000/api/v1/categories/getAll-categories",
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
