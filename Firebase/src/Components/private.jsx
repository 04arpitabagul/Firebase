import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebase";

export const Private = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return (window.location.href = "/Login");
  } else {
    return children;
  }
};

export default Private;
