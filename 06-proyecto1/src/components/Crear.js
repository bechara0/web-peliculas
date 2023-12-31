import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir película";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliState;
  const conseguirDatosForm = (e) => {
    e.preventDefault();
    // conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    // crear objet de peli a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    //guardar estado
    setPeliState(peli);

    //actualizar estado
    setListadoState((elementos) => {
      return [...elementos, peli];
    });
    // guardar en local storage
    GuardarEnStorage("pelis", peli); // array pelis, elemento peli
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado la película " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Título" />
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
