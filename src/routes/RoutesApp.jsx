import React from "react";
import { Routes, Route } from "react-router-dom";
// import AdminScreen from "./pages/AdminScreen";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import NavBar from "../components/NavBar";
import ErrorScreen from "../pages/ErrorScreen";

const RoutesApp = ({ cambiarLogin }) => {
  return (
    <>
      <NavBar cambiarLogin={cambiarLogin} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" element={<AboutScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
