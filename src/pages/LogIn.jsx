import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ cambiarLogin }) => {
  const navigate = useNavigate();

  //! estados para cada uno de los campos
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleChange = (e) => {
  //     // console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };

  //! UN SOLO ESTADO PARA TODOS LOS CAMPOS
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value);

    setShowAlert(false);

    setFormValues({
      //SPREAD OPERATOR "..."
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //usuario de ejemplo
    const user = {
      email: "lucas@lucas.com",
      password: "123456",
    };

    // if (!formValues.email || !formValues.password) {
    if (!email || !password) {
      // alert("Faltan datos en los campos!");
      setShowAlert(true);
    }

    //validar el usuario REGISTRADO
    if (email === user.email && password === user.password) {
      cambiarLogin();
      navigate("/");
    } else {
      alert("Email o password incorrectos!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>
              Sing in to <i className="fa fa-btc" aria-hidden="true"></i>
              97 Coins
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-grid">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  // required
                />
              </div>
              <div className="mb-3 d-grid">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formValues.password}
                  //   onChange={(e) => {
                  //     setPassword(e.target.value);
                  //   }}
                  onChange={handleChange}
                />
              </div>
              {showAlert && (
                <p className="bg-danger text-light text-center m-3">
                  Faltan datos, complete todos los campos!
                </p>
              )}

              <div className="mb-3 d-grid">
                <button className="btn btn-success">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
