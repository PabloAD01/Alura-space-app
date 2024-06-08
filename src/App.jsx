import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";

import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie";
import GlobalContextProvider from "./context/GlobalContextProvider";

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
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <GlobalContextProvider>
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <BarraLateral />
              <ContenidoGaleria>
                <Banner
                  texto="La galería más completa del espacio"
                  backgroundImage="../../assets/banner.png"
                />
                <Galeria />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          <Pie />
          <ModalZoom />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  );
};

export default App;
