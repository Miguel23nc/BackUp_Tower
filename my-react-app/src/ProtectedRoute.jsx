import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Loading from "./components/Loading/Loading";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  if (!isLoading && !isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
