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
  const { setTag } = useContext(GlobalContext);

  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {state.fotosDeGaleria
              .filter((foto) => {
                return (
                  state.consulta == "" ||
                  foto.titulo
                    .toLocaleLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .includes(
                      state.consulta
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                    )
                );
              })
              .map((foto) => (
                <Imagen key={foto.id} foto={foto} expandida={false} />
              ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
