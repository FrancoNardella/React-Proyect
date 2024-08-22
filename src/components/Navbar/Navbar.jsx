import { useState } from "react";
import * as s from "./NavbarStyles";
import imgLogo from "/img/Marca.png";
// import { CartIcon } from '/public/img/CartIcon.png'; // Suponiendo que tienes un ícono para el carrito.

export const Navbar = ({ onCartClick }) => {
  return (
    <s.HeaderContainer>
      <a href="#">
        <img src={imgLogo} alt="logo" />
      </a>
      <s.NavbarContainer>
        <s.NavbarItems>
          <s.NavLinkStyled to="/">Home</s.NavLinkStyled>
          <s.NavLinkStyled to="/about">Nosotros</s.NavLinkStyled>
          <s.NavLinkStyled to="/products">Productos</s.NavLinkStyled>
          <s.NavLinkStyled to="/contact">Contactanos</s.NavLinkStyled>
        </s.NavbarItems>
        <s.CartButton onClick={onCartClick}>{/* <CartIcon /> */}</s.CartButton>
      </s.NavbarContainer>
    </s.HeaderContainer>
  );
};

export default Navbar;
