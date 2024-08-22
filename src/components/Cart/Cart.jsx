import styled from "styled-components";
import { useState } from "react";
import { toast } from 'sonner';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: 1000;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CartButton = styled.button`
  background-color: #ffffff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
`;

export const Cart = ({ isOpen, items, onAdd, onRemove, onConfirm }) => {
  return (
    <CartContainer isOpen={isOpen}>
      <h2>Carrito</h2>
      {items.length === 0 && <p>No hay productos en el carrito.</p>}
      {items.map((item) => (
        <CartItem key={item.id}>
          <span>{item.name}</span>
          <div>
            <button onClick={() => onRemove(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onAdd(item)}>+</button>
          </div>
        </CartItem>
      ))}
      {items.length > 0 && (
        <CartButton onClick={() => {onConfirm(); toast.success('Compra confirmada!')}}>
          Confirmar Compra
        </CartButton>
      )}
    </CartContainer>
  );
};
