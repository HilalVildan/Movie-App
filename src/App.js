import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="dark:bg-[#23242a]">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
