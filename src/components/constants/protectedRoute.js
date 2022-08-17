import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { DataContext } from "../api/context";

const ProtectedRoutes = () => {
  const {
    state: { isLoggedIn }} = DataContext();
  return (
    isLoggedIn ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectedRoutes
