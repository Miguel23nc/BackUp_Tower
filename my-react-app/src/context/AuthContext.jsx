import axios from "../api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { verifyToken } from "../api/verifyToken";
import { setMessage } from "../redux/actions";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [response, setResponse] = useState(null);

  const signin = async (user) => {
    try {
      const response = await axios.post("/login", user);
      const data = response.data;
      console.log(data);
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/logout");
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
    }
  };

  const signup = async (user) => {
    try {
      const response = await axios.post("/registerEmployee", user);
      const data = response.data;
      setResponse(data.message);
    } catch (error) {
      console.log(error);
      setErrors(
        error?.response?.data?.message?._message ||
          error?.response?.data?.message
      );
    }
  };

  const createClient = async (user) => {
    try {
      const response = await axios.post("/createClient", user);
      const data = response.data;
      setResponse(data.message);
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
    }
  };
  const updateClient = async (user) => {
    try {
      const response = await axios.patch("/patchClient", user);
      const data = response.data;
      setResponse(data.message);
      return data;
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
    }
  };
  const updateEmployee = async (user) => {
    try {
      const response = await axios.patch("/patchEmployee", user);
      const data = response.data;
      setResponse(data.message);
      setUser(data.updatedUser);
      return data;
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
    }
  };
  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete("/deleteEmployee", {
        data: { _id: id },
      });
      const data = response.data;
      setResponse(data.message);
      return data;
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (errors) {
      dispatch(setMessage(errors, "Error"));
    }
    if (response) {
      dispatch(setMessage(response, "Bien"));
    }
  }, [errors, response]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (cookies.token) {
        try {
          const response = await verifyToken();
          if (
            response?.response?.data?.message === "No se encuentra este usuario"
          ) {
            console.log("no se encuentra este usuario");
            await logout();
          }
          if (response?.data) {
            setUser(response.data);
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.log(error);

          if (error?.response?.data?.message === "Token expirado") {
            console.log("expirado");
            await logout();
          }

          setUser(null);
          setIsAuthenticated(false);
        }
      }
      setIsLoading(false);
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        updateEmployee,
        deleteEmployee,
        signin,
        isAuthenticated,
        isLoading,
        logout,
        errors,
        setErrors,
        response,
        setResponse,
        createClient,
        updateClient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
