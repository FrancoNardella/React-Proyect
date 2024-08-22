import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Cart } from "../Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../components/Cart/CartContext";

const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;

  & p {
    text-align: center;
  }
`;

const ContentContainerStyled = styled.div`
  height: 100%;
`;

export const Layout = ({ children }) => {
  const {
    cartOpen,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleConfirmPurchase,
  } = useContext(CartContext);

  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <Footer />
      <Cart
        isOpen={cartOpen}
        items={cartItems}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onConfirm={handleConfirmPurchase}
      />
      <Cart
        isOpen={cartOpen}
        items={cartItems}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onConfirm={handleConfirmPurchase}
      />
    </LayoutContainerStyled>
  );
};
