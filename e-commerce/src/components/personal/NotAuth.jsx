import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const auth = localStorage.getItem("auth_token");
  return auth ? <Navigate to="/dashbord" /> : children;
};

export default PublicRoute;
