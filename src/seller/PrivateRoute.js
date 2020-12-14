import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../auth/authseller";
import {Shop} from './components/Home/shop'

export const PrivateRoute = (props) => {
  let Component = props.component;
  let isAuthenticated = auth.getAuthStatus();
  
  const id = props.computedMatch.params.id
  const name = props.computedMatch.params.name
  return (
    <Route
      render={(props) => {
        return auth.getAuthStatus() ===true ? (
          <Component id ={id} name = {name}  {...props} ></Component>
        ) : (
          <Redirect to="/mojaprodavnica/login"></Redirect>
        );
      }}
    ></Route>
  );
};