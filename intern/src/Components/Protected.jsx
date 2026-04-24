import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isAuth = localStorage.getItem("auth");

  return isAuth === "true" ? children : <Navigate to="/Login" />;
}

export default Protected;