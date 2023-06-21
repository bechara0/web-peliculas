import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);
  const buscarPeli = (e) => {
    //crear estado y actualizarlo
    setBusqueda(e.target.value);

    // listado completo de peliculas, para esto uso promp listadoState y setlistado State

    // filtrar para buscar coincidencias
    let pelis_econtradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    // comprobar si hay resultado
    if (busqueda.length <= 1 || pelis_econtradas <= 0) {
      pelis_econtradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    // actualizar estado del estado con lo que he logrado filtrar
    setListadoState(pelis_econtradas);
  };

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {noEncontrado == true && (
          <span className="no-encontrado">Sin coincidencias</span>
        )}
        <form action="">
          <input
            type="text"
            id="seach_field"
            name="busqueda"
            autoComplete="off"
            value={busqueda}
            onChange={buscarPeli}
          />
          <button>Buscar</button>
        </form>
      </div>
    </>
  );
};
