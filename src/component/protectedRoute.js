import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import FireAuth from "./fireConfig";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(null);

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    FireAuth.auth().onAuthStateChanged({ signal: signal }, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
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
