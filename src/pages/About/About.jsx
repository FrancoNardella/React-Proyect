import * as s from "./AboutStyles";
import imgPerro1 from "/img/Perro fondo celeste.jpg";
import imgPerro2 from "/img/Gato fondo naranja.jpg";

export const About = () => {
  return (
    <s.AboutContainer>
      <h2>Nosotros</h2>
      <p>
        Somos una tienda en línea dedicada a ofrecer los mejores productos para
        mascotas, desde juguetes y alimentos hasta accesorios y productos de
        higiene. Nuestro objetivo es garantizar la felicidad y el bienestar de
        tus compañeros peludos.
      </p>
      <s.AboutItems>
        <s.AboutItem>
          <s.AboutImg className="img1">
            <img src={imgPerro1} alt="perro" />
          </s.AboutImg>
          <s.AboutText className="textAbout1">
            <h2>Calidad Garantizada:</h2>
            <p>
              Trabajamos solo con marcas de confianza que cumplen con altos
              estándares de calidad.
            </p>
            <h2>Envíos Rápidos:</h2>
            <p>
              Ofrecemos opciones de envío rápido para que nunca te quedes sin lo
              que necesitas.
            </p>
            {/* <Button radius={"10"}>Ver mas</Button> */}
          </s.AboutText>
        </s.AboutItem>
        <s.AboutItem>
          <s.AboutText className="textAbout2">
            <h2>Atención Personalizada:</h2>
            <p>
              Nuestro equipo de expertos está siempre dispuesto a ayudarte a
              encontrar el producto perfecto para tu mascota.
            </p>
            <h2>Compromiso con el Medio Ambiente: </h2>
            <p>
              Utilizamos empaques sostenibles y apoyamos prácticas de producción
              responsables.
            </p>
            {/* <Button radius={"10"}>Ver mas</Button> */}
          </s.AboutText>
          <s.AboutImg className="img2">
            <img src={imgPerro2} alt="perro" />
          </s.AboutImg>
        </s.AboutItem>
      </s.AboutItems>
    </s.AboutContainer>
  );
};

export default About;
