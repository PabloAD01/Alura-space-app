import React, {
  act,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const GlobalContext = createContext();

const initialState = {
  consulta: "",
  fotoSeleccionada: null,
  fotosDeGaleria: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setFotosDeGaleria":
      return { ...state, fotosDeGaleria: action.payload };
    case "setFotoSeleccionada":
      return { ...state, fotoSeleccionada: action.payload };
    case "setConsulta":
      return { ...state, consulta: action.payload };

    case "alternarFavorito":
      const fotosDeGaleria = state.fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorito:
            fotoDeGaleria.id === action.payload.id
              ? !action.payload.favorito
              : fotoDeGaleria.favorito,
        };
      });
      if (action.payload.id === state.fotoSeleccionada?.id) {
        return {
          ...state,
          fotosDeGaleria: fotosDeGaleria,
          fotoSeleccionada: {
            ...state.fotoSeleccionada,
            favorito: !state.fotoSeleccionada.favorito,
          },
        };
      } else {
        return {
          ...state,
          fotosDeGaleria: fotosDeGaleria,
        };
      }

    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cargarFotos = async () => {
      try {
        const response = await fetch("http://localhost:3000/fotos");
        const data = await response.json();
        console.log(data);
        dispatch({ type: "setFotosDeGaleria", payload: data });
      } catch (error) {}
    };

    setTimeout(() => {
      cargarFotos();
    }, 2000);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
