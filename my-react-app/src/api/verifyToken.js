import axios from "./axios"

export const verifyToken = () => axios.get("/auth/verify")
