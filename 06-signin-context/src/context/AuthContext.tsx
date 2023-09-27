import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type Auth = {
  name: string;
  token: string;
};

type AuthContext = {
  authData: Auth;
  setAuthData: Dispatch<SetStateAction<Auth>>;
};

export const AuthContext = createContext<AuthContext | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No Context!");
  }
  return context;
}

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authData, setAuthData] = useState<Auth>({ name: "", token: "" });
  return <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>;
}
