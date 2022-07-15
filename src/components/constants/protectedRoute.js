import React from "react";

import { Outlet, Route, Navigate } from "react-router-dom";
import { DataContext } from "../api/context";

const ProtectedRoutes = () => {
  const {
    state: { isLoggedIn },
    
  } = DataContext();
  // console.log(isLoggedIn);
  return (
    // <Route exact path=""
    //   {...rest}
    //   render={(props) => {
    //     return isLoggedIn === true ? (
    //       <Component {...rest} {...props} />
    //     ) : (
    //       <Navigate
    //         to="/"
    //       />
    //     );
    //   }}
    // />
    isLoggedIn ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectedRoutes
