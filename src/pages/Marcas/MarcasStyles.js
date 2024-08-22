import styled from "styled-components";

export const HeroMarcaStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  @media (max-width: 768px) {
    gap: 35px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const HeroCardMarcaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 300px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
