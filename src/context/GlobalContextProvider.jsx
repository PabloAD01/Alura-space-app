import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [consulta, setConsulta] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const cargarFotos = async () => {
      try {
        const response = await fetch("http://localhost:3000/fotos");
        const data = await response.json();
        console.log(data);
        setFotosDeGaleria([...data]);
      } catch (error) {}
    };

    setTimeout(() => {
      cargarFotos();
    }, 2000);
  }, []);

  /*  useEffect(() => {
    const filtrarFotos = fotosDeGaleria.filter((foto) => {
      const filtroTag = !tag || foto.tagId === tag;
      const filtroTitulo =
        !filtro ||
        foto.titulo
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .includes(
            filtro
              .toLocaleLowerCase()
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "")
          );

      return filtroTag && filtroTitulo;
    });

    setFotosDeGaleria(filtrarFotos);
    console.log("Filtro", filtro);
    console.log(filtrarFotos);
    console.log("Tag", tag);
  }, [filtro, tag]); */

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
    <GlobalContext.Provider
      value={{
        fotosDeGaleria,
        setFotosDeGaleria,
        fotoSeleccionada,
        setFotoSeleccionada,
        consulta,
        setConsulta,
        tag,
        setTag,
        alternarFavorito,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
