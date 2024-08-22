import * as s from "./MarcasStyles";
import HeroDogChow from "/img/DogChow.png";
import HeroEukanauba from "/img/eukanuba.png";
import HeroPedigree from "/img/Pedigree.png";
import HeroVital from "/img/Vital.jpg";

export const Marcas = () => {
  return (
    <s.HeroMarcaStyled>
      <s.HeroCardMarcaStyled>
        <img src={HeroDogChow} alt="Marca DogChow" />
      </s.HeroCardMarcaStyled>

      <s.HeroCardMarcaStyled>
        <img src={HeroEukanauba} alt="" />
      </s.HeroCardMarcaStyled>

      <s.HeroCardMarcaStyled>
        <img src={HeroPedigree} alt="" />
      </s.HeroCardMarcaStyled>

      <s.HeroCardMarcaStyled>
        <img src={HeroVital} alt="" />
      </s.HeroCardMarcaStyled>
    </s.HeroMarcaStyled>
  );
};
