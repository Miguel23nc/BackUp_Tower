import axios from "axios"
export const LOGIN = "LOGIN"

export const login = (userData) => async (dispatch) => {
    const response = await axios.post("http://localhost:3001/api/register", userData)
    const data = response.data
    dispatch({
        type: LOGIN,
        payload: data
    })
}