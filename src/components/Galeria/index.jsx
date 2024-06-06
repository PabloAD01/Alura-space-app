import styled from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({
  fotos = [],
  alSeleccionarFoto,
  alternarFavorito,
  setTag,
}) => {
  return (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => (
              <Imagen
                alSolicitarZoom={alSeleccionarFoto}
                alternarFavorito={alternarFavorito}
                key={foto.id}
                foto={foto}
                expandida={false}
              />
            ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
