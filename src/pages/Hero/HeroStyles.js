import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const HeroImgStyled = styled.div`
  img {
    width: 100%;
    margin-bottom: 50px;
  }

  h1 {
    position: absolute;
    justify-content: center;
    text-align: left;
    font-size: 72px;
    width: 900px;
    margin-top: 230px;
    margin-left: 700px;
    color: #0b4a89;

    @media (max-width: 768px) {
      font-size: 36px;
      width: 450px;
      margin-top: 115px;
      margin-left: 350px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      width: 200px;
      margin-top: 75px;
      margin-left: 160px;
    }
  }
`;
