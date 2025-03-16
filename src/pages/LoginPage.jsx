import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Credenciales de prueba
  const validUser = {
    email: "test@pizzeria.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (email === validUser.email && password === validUser.password) {
      setMessage("Inicio de sesión exitoso.");
    } else {
      setMessage("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
