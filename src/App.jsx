import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar
          total={cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}
          cart={cart}
        />
        <div
          className="container-fluid flex-grow-1"
          style={{ margin: 0, padding: 0 }}
        >
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/pizza" element={<Pizza />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
