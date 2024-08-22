import { createContext, useState } from "react";
import { toast } from 'sonner';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success(`${product.name} agregado al carrito`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
    toast.error(`${product.name} eliminado del carrito`);
  };

  const handleConfirmPurchase = () => {
    setCartItems([]);
    toast.success('Compra confirmada!');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpen,
        setCartOpen,
        handleAddToCart,
        handleRemoveFromCart,
        handleConfirmPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
