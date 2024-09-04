import axios from "../api/axios";

export const SET_MESSAGE = "SET_MESSAGE";
export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_CLIENTS = "GET_CLIENTS";
export const SET_MODULES_AND_SUBMODULES = "SET_MODULES_AND_SUBMODULES";

export const setMessage = (message, type) => async (dispatch) => {
  try {
    dispatch({ type: "SET_MESSAGE", payload: { message, type } });
  } catch (error) {
    console.log(error);
  }
};

export const getEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get("/employee");
    const data = response.data;
    dispatch({
      type: "GET_EMPLOYEES",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getClients = () => async (dispatch) => {
  try {
    const response = await axios.get("/getClients");
    const data = response.data;
    dispatch({
      type: "GET_CLIENTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setModulesAndSubModules = (user) => async (dispatch) => {
  try {
    const modules = user ? user.modules : [];
    const grouped = modules.reduce((acc, mo) => {
      let moduleEntry = acc.find((entry) => entry.module === mo.name);
      if (!moduleEntry) {
        moduleEntry = { module: mo.name, submodule: [] };
        acc.push(moduleEntry);
      }
      if (mo.submodule && mo.submodule.name) {
        moduleEntry.submodule.push(mo.submodule.name);
      }
      return acc;
    }, []);

    dispatch({
      type: SET_MODULES_AND_SUBMODULES,
      payload: grouped,
    });
  } catch (error) {
    console.log(error);
  }
};