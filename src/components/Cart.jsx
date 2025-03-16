import React from "react";
import "../styles/Cart.css"; // Importa los estilos

const Cart = ({ cart, setCart }) => {
  // Función para aumentar la cantidad
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Función para disminuir la cantidad o eliminar la pizza si llega a 0
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .filter((item) => !(item.id === id && item.quantity === 1))
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
    );
  };

  // Función para eliminar una pizza del carrito
  const removePizza = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calcular el total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt={item.name} />
          <span>{item.name}</span>
          <span>${item.price.toLocaleString()}</span>
          <button
            className="decrease"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="increase"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
          <button className="remove" onClick={() => removePizza(item.id)}>
            🗑
          </button>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default Cart;
