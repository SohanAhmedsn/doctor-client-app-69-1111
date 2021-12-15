import React, { createContext } from "react";
import UseFIrebase from "../../Hook/UseFIrebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = UseFIrebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
