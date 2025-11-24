import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth.store";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const user = useAuth((state: { user: any }) => state.user);
  const token = localStorage.getItem("token");

  // If no user in store AND no token in storage → redirect
  if (!user && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
