import {
  GET_EMPLOYEES,
  GET_CLIENTS,
  SET_MESSAGE,
  SET_MODULES_AND_SUBMODULES,
} from "./actions";

const initialState = {
  modulesAndSubModules: [],
  employees: [],
  clients: [],
  error: {
    type: "",
    message: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        error: {
          message: action.payload.message,
          type: action.payload.type,
        },
      };
    case SET_MODULES_AND_SUBMODULES:
      return {
        ...state,
        modulesAndSubModules: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
