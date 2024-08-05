import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>; 

    if (!isLoading && !isAuthenticated) return <Navigate to="/" replace />;

    return <Outlet />;
}

export default ProtectedRoute;
