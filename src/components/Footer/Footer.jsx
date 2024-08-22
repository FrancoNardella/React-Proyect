import * as s from "./FooterStyles";
import logoFooter from "/img/Footer.jpg";
import logoFace from "/img/Face.png";
import logoTw from "/img/X.png";
import logoIg from "/img/Ig.png";

export const Footer = () => {
  return (
    <s.FooterContainer>
      <img src={logoFooter} alt="footer" />
      <s.FooterText>
        <h3>¡Seguinos en las redes!</h3>
      </s.FooterText>
      <s.FooterIconos>
        <img src={logoFace} alt="logoFace" />
        <img src={logoTw} alt="logoTw" />
        <img src={logoIg} alt="logoIg" />
      </s.FooterIconos>
    </s.FooterContainer>
  );
};

export default Footer;
