import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error fetching pizza:", error));
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container text-center">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="img-fluid" />
      <h3>Precio: ${pizza.price}</h3>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p>{pizza.desc}</p>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
