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
    throw error;
  }
};

export const UserApiService = {
  register,
};
