import React, { createContext, useReducer, useContext } from "react";

import { initialValues, reducer } from "./state";
export const UserContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const DataContext = ()=> useContext(UserContext);

export default Context;
