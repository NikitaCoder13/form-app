import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export const PublicRoute = ({ children, restricted }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/import" /> : children;
};
