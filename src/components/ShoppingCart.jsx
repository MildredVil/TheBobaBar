import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  const addToCart = (flavor) => {
    setItems([...items, flavor]);
  };

  return (
    <div>
      <h2>Tu Pedido Perfecto:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Total Items: {items.length}</p>
      <button onClick={() => addToCart("Leche de Almendras")}>Add Leche de Almendras</button>
      <button onClick={() => addToCart("Leche de Coco")}>Add Leche de Coco</button>
      <button onClick={() => addToCart("Leche de Avena")}>Add Leche de Avena</button>
      <button onClick={() => addToCart("Leche de Soja")}>Add Leche de Soja</button>
      <button onClick={() => addToCart("Leche de Arroz")}>Add Leche de Arroz</button>
      <button onClick={() => addToCart("Leche de Anacardo")}>Add Leche de Anacardo</button>
      <button onClick={() => addToCart("Leche de Cáñamo")}>Add Leche de Cáñamo</button>
    </div>
  );
}

export default ShoppingCart;
