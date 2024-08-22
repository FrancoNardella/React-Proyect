import { HeroContainerStyled, HeroImgStyled } from "./HeroStyles";
import HeroImg from "/img/Fondo perro gatito.png";
import { Marcas } from "../Marcas/Marcas";

function Hero() {
  return (
    <>
      <HeroContainerStyled>
        {/* <h1>Creando momentos felices para tus mascotas</h1> */}
        <HeroImgStyled>
          <h1>Creando momentos felices para tus mascotas</h1>
          <img src={HeroImg} alt="Imagen de mascotas" />
          <Marcas />
        </HeroImgStyled>
      </HeroContainerStyled>
    </>
  );
}

export default Hero;
