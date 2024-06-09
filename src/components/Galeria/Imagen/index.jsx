import styled from "styled-components";
import BotonIcono from "../../BotonIcono";
import { GlobalContext } from "../../../context/GlobalContextProvider";
import { useContext } from "react";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Pie = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagen = ({ foto, expandida }) => {
  const iconoFavorito = foto.favorito
    ? "/iconos/favorito-activo.png"
    : "/iconos/favorito.png";

  const { dispatch } = useContext(GlobalContext);

  return (
    <Figure>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Pie>
          <h4>{foto.fuente}</h4>

          <BotonIcono
            onClick={() =>
              dispatch({ type: "alternarFavorito", payload: foto })
            }
          >
            <img src={iconoFavorito} alt="Boton favorito" />
          </BotonIcono>
          {!expandida && (
            <BotonIcono
              aria-hidden={expandida}
              onClick={() =>
                dispatch({ type: "setFotoSeleccionada", payload: foto })
              }
            >
              <img src="/iconos/expandir.png" alt="Boton expandir" />
            </BotonIcono>
          )}
        </Pie>
      </figcaption>
    </Figure>
  );
};

export default Imagen;
