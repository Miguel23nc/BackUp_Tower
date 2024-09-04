import axios from "./axios";

export const verifyToken = async () => {
  try {
    const response = await axios.get("/auth/verify");
    return response
  } catch (error) {
    return error
  }
};
