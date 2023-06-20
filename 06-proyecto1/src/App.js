import "./App.css";
import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* <!-- cabecera --> */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Películas</h1>
      </header>

      {/* <!-- Barra navegacion --> */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Películas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* <!-- contenido principal --> */}
      <section className="content">
        {/* <!-- aca van el listado pelis --> */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>
      {/* <!-- barra lateral --> */}
      <aside className="lateral">
        <Buscador />
        <Crear setListadoState={setListadoState} />
      </aside>

      {/* <!-- Pie de pÁgina --> */}
      <footer className="footer">
        &copy; Master en Javascript ES12 y Typescript -
        <a href="https://juanbecharaweb.com">Juan Bechara Web</a>
      </footer>
    </div>
  );
}

export default App;
