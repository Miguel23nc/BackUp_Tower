import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center">
        <video
          src="/RELOJ DE ARENA.mov" // Ruta relativa a la carpeta public
          autoPlay
          loop
          muted
          playsInline
          className="video-element"
        />
      </div>
    );

  if (!isLoading && !isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
