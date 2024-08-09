import axios from "axios";
export const ERRORES = "ERRORES";

export const setErrorsA = (error) => async (dispatch) => {
  try {
    const err = error;
    console.log(error);
    dispatch({
      type: ERRORES,
      payload: err,
    });
  } catch (error) {
    console.log(error);
  }
};
