import axios from "axios";
import Cookies from "js-cookie";

// Sing Out
export const singOut = (next) => {
  removeCookies("jwt");
  localStorage.removeItem("user");
  next();
};

// set Cookies
export const setCookies = (key, value) => {
  Cookies.set(key, value, { expires: 1 });
};

// Get Cookies
export const getCookies = (key) => {
  return Cookies.get("jwt");
};

export const removeCookies = (kay) => {
  Cookies.remove(kay);
};

// set token in LocalStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (data, cb) => {
  // console.log(data.token);
  // console.log(data.user);
  setLocalStorage("user", data.user);
  setCookies("jwt", data.token);

  cb();
};

export const isAuth = () => {
  if (process.browser) {
    const cookichecked = getCookies("jwt");
    if (cookichecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

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

    return res;
  } catch (error) {
    return error.response;
  }
};
