import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 200px;

    @media (max-width: 768px) {
      height: 150px;
    }

    @media (max-width: 480px) {
      height: 100px;
    }
  }
`;

export const FooterText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 15pt;
  width: 300px;
  margin: 0 0 50px 1300px;

  @media (max-width: 768px) {
    margin: 0 0 50px 700px;
    font-size: 12pt;
    width: 200px;
  }

  @media (max-width: 480px) {
    margin: 0 0 10px 250px;
    font-size: 8pt;
    width: 150px;
  }
`;

export const FooterIconos = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 120px 0 50px 1300px;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;

    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
    }

    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    margin: 120px 0 50px 700px;
  }

  @media (max-width: 480px) {
    margin: 120px 0 70px 250px;
  }
`;
