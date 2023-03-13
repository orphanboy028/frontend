import axios from "axios";

// Signup Api
export const singUpNewAccount = async (data) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/api/v1/user/singUp",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};

// LoginApi
export const loginAccount = async (clData) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/api/v1/user/login",
      clData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res);
  } catch (error) {
    console.log(error.response);
  }
};
