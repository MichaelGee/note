import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "./fireConfig";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (firebase.getCurrentUser()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
