import React from "react";
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";

import SignIn from "../pages/auth/signin/signin";
import SignUp from "../pages/auth/signup/signup";
import Reset from "../pages/auth/reset/reset";
import HomePage from "../pages/landingPage/landingPage";
import AuthUser from "../pages/userAccount/userAccount";

const router = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/reset-password' element={<Reset />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/user/*' element={<AuthUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default router;
