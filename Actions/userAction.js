import axios from "axios";

export const getUser = async (token) => {
  try {
    return await axios.get("http://127.0.0.1:5000/api/v1/user/update-me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error.response;
  }
};

export const updateProfile = async (token, data) => {
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/api/v1/user/update-me",
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

export const getAllUsers = async (token) => {
  try {
    return await axios.get("http://127.0.0.1:5000/api/v1/user/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error.response;
  }
};
