import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Beauty from "../pages/Beauty";
import Dashboard from "../pages/Dashboard";
import Reciepes from "../pages/Reciepes";
import { ToastContainer } from "react-toastify";
import Header from "./Header";

const RouterComponent = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reciepes" element={<Reciepes />} />
          <Route path="/beauty" element={<Beauty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComponent;
