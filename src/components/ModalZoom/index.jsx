import Imagen from "../Galeria/Imagen";
import styled from "styled-components";
import BotonIcono from "../BotonIcono";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const Modal = () => {
  const { fotoSeleccionada, alternarFavorito, setFotoSeleccionada } =
    useContext(GlobalContext);

  return (
    <>
      {fotoSeleccionada && (
        <>
          <Overlay />
          <DialogEstilizado
            open={!!fotoSeleccionada}
            onClose={() => setFotoSeleccionada(null)}
          >
            <Imagen
              expandida={true}
              foto={fotoSeleccionada}
              alternarFavorito={alternarFavorito}
            />
            <form method="dialog">
              <BotonIcono formMethod="dialog">
                <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
              </BotonIcono>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default Modal;
