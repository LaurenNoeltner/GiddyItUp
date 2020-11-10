import React from "react";
const AuthContext = React.createContext({
  jwt: "",
  setJwt: () => {},
});

export default AuthContext;