import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./auth/auth";

export const PrivateRoute = (props) => {
  let Component = props.component;
  const id = props.computedMatch.params.id
  let isAuthenticated = auth.getAuthStatus();
  return (
    <Route
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} id = {id} ></Component>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};