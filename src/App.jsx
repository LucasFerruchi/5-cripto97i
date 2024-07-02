import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// importar paginas
import LogIn from "./pages/LogIn";
import RoutesApp from "./routes/RoutesApp";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes login={login}>
                <RoutesApp cambiarLogin={cambiarLogin} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={<LogIn cambiarLogin={cambiarLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
