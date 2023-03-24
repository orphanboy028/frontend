import axios from "axios";

export const createEnquiriyAction = async (token, slug) => {
  try {
    return await axios.post(
      `http://127.0.0.1:5000/api/v1/enquiry/${slug}`,
      {},
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

export const getallProductEnquiryAction = async (token) => {
  try {
    return await axios.get(
      "http://127.0.0.1:5000/api/v1/enquiry/all-product-enquiry",
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
