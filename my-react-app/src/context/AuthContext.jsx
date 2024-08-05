import axios from "../api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { verifyToken } from "../api/verifyToken";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const [errors, setErrors] = useState(null);

    const signin = async (user) => {
        try {
            const response = await axios.post("/login", user);
            const data = response.data;
            setUser(data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            setErrors(error?.response?.data?.message);
        }
    }
    const logout = async () => {
        try {
            await axios.post("/logout");
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.log(error);
            setErrors(error?.response?.data?.message);
        }
    }

    const signup = async (user) => {
        try {
            const response = await axios.post("/register", user);
            const data = response.data;
            setUser(data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if (cookies.token) {
                try {
                    const response = await verifyToken(cookies.token);
                    if (!response.data) setIsAuthenticated(false);
                    setIsAuthenticated(true);
                    setUser(response.data);
                } catch (error) {
                    console.log(error);
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
                signin,
                isAuthenticated,
                isLoading,
                logout,
                errors,
                setErrors
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
