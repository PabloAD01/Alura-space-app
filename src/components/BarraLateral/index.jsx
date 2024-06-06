import styled from "styled-components";
import ItemNavegacion from "../ItemNavegacion";
import { opcionesBarraLateral } from "../../App";

const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          {opcionesBarraLateral.map((item) => (
            <ItemNavegacion
              key={item.id}
              iconoActivo={item.iconoActivo}
              iconoInactivo={item.iconoInactivo}
              activo={item.active}
            >
              {item.title}
            </ItemNavegacion>
          ))}
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
