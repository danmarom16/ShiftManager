import axios from "axios";
/* URL CONSTS */
const baseURL = "http://localhost:5000";
const apiUserRoute = "/api/user";

const register = async (userData) => {
  const url = baseURL + apiUserRoute + "/register";
  try {
    const res = await axios.post(url, userData);
    return res.status;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

const login = async (loginData) => {
  const url = baseURL + apiUserRoute + "/login";
  try {
    const res = await axios.post(url, loginData);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const UserApiService = {
  register,
  login,
};
