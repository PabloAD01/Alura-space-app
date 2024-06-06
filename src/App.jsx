import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie";

export const opcionesBarraLateral = [
  {
    id: 1,
    title: "Inicio",
    iconoActivo: "../iconos/home-activo.png",
    iconoInactivo: "../iconos/home-inactivo.png",
    active: true,
  },

  {
    id: 2,
    title: "Más vistas",
    iconoActivo: "../iconos/mas-vistas-activo.png",
    iconoInactivo: "../iconos/mas-vistas-inactivo.png",
    active: false,
  },

  {
    id: 3,
    title: "Más Me Gusta",
    iconoActivo: "../iconos/me-gusta-activo.png",
    iconoInactivo: "../iconos/me-gusta-inactivo.png",
    active: false,
  },

  {
    id: 4,
    title: "Nuevas",
    iconoActivo: "../iconos/nuevas-activo.png",
    iconoInactivo: "../iconos/nuevas-inactivo.png",
    active: false,
  },

  {
    id: 5,
    title: "Sorpréndame",
    iconoActivo: "../iconos/sorprendeme-activo.png",
    iconoInactivo: "../iconos/sorprendeme-inactivo.png",
    active: false,
  },
];

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 56px;
`;

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const filtrarFotos = fotos.filter((foto) => {
      const filtroTag = !tag || foto.tagId === tag;
      const filtroTitulo =
        !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroTag && filtroTitulo;
    });

    setFotosDeGaleria(filtrarFotos);
  }, [filtro, tag]);

  const alternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorito: !fotoSeleccionada.favorito,
      });
    }

    setFotosDeGaleria(
      fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorito:
            fotoDeGaleria.id === foto.id
              ? !fotoDeGaleria.favorito
              : fotoDeGaleria.favorito,
        };
      })
    );
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera filtro={filtro} setFiltro={setFiltro} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto="La galería más completa del espacio"
                backgroundImage="../../assets/banner.png"
              />
              <Galeria
                alSeleccionarFoto={(foto) => setFotoSeleccionada(foto)}
                fotos={fotosDeGaleria}
                alternarFavorito={alternarFavorito}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <Pie />
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alternarFavorito={alternarFavorito}
        />
      </FondoGradiente>
    </>
  );
};

export default App;
