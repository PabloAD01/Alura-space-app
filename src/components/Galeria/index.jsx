import { useContext } from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import Imagen from "./Imagen";
import { GlobalContext } from "../../context/GlobalContextProvider";

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

const Galeria = () => {
  const {
    fotosDeGaleria,
    setTag,
    setFotoSeleccionada,
    alternarFavorito,
    consulta,
  } = useContext(GlobalContext);

  console.log("fotos de galeria", fotosDeGaleria);

  return (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {fotosDeGaleria
              .filter((foto) => {
                return (
                  consulta == "" ||
                  foto.titulo
                    .toLocaleLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .includes(
                      consulta
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                    )
                );
              })
              .map((foto) => (
                <Imagen
                  alSolicitarZoom={(foto) => setFotoSeleccionada(foto)}
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
