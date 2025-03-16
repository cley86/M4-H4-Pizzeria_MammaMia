import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Home = ({ cart, setCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  const handleAddToCart = (pizza) => {
    const existingItem = cart.find((item) => item.name === pizza.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1, id: Date.now() }]);
    }
  };

  return (
    <div className="container-fluid text-center min-vh-100 d-flex flex-column px-0">
      <Header />
      <div className="row w-100 justify-content-center mt-5 mb-5">
        <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="card" style={{ width: "18rem" }}>
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price}</p>
                <p>
                  <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
                </p>
                <p>
                  <strong>Descripción:</strong> {pizza.desc}
                </p>
                <button
                  onClick={() => handleAddToCart(pizza)}
                  className="btn btn-primary"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
