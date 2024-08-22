import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  /* height: 100px; */
  background-color: #f58726;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  img {
    width: 500px;
    height: 100px;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;

    img {
      width: 400px;
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.2rem;

    img {
      width: 330px;
      height: 80px;
    }
  }
`;

export const NavbarContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 400px;

  a {
    padding: 1rem 1.5rem;
    /* border: 1px solid crimson; */
  }

  @media (max-width: 768px) {
    gap: 20px;
    width: 200px;

    a {
      padding: 0.5rem 1rem;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
    width: 100px;

    a {
      padding: 0.25rem 0.5rem;
    }
  }
`;

export const NavbarItems = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: white;
    font-size: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;

  &.active {
    color: #f1c40f;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;
