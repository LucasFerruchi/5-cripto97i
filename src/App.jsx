import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// importar paginas

import HomeScreen from "./pages/HomeScreen";
// import AdminScreen from "./pages/AdminScreen";
import ErrorScreen from "./pages/ErrorScreen";
import LogIn from "./pages/LogIn";
import AboutScreen from "./pages/AboutScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />

          {/* <Route path="/Admin" element={<AdminScreen />} /> */}
          <Route path="/login" element={<LogIn />} />

          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
