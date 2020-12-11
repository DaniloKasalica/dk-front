import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../auth/authseller";

export const PrivateRoute = (props) => {
  let Component = props.component;
  let isAuthenticated = auth.getAuthStatus();
  return (
    <Route
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} ></Component>
        ) : (
          <Redirect to="/seller/login"></Redirect>
        );
      }}
    ></Route>
  );
};