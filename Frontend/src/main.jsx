import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated:()=>{},
  user:{},
  setUser:()=>{}
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [user, setUser] = useState({});

  
  const handleSetIsAuthenticated = (auth) => {
    setIsAuthenticated(auth);
    localStorage.setItem('isAuthenticated', JSON.stringify(auth));
  };

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated: handleSetIsAuthenticated,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
