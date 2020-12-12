import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../auth/authseller";

export const PrivateRoute = (props) => {
  let Component = props.component;
  let isAuthenticated = auth.getAuthStatus();
  console.log(auth.getAuthStatus())
  return (
    <Route
      render={(props) => {
        return auth.getAuthStatus() ===false ? (
          <Component {...props} ></Component>
        ) : (
          <Redirect to="/mojaprodavnica/login"></Redirect>
        );
      }}
    ></Route>
  );
};