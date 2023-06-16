import logo from "./logo.svg";
import "./App.css";

function App() {
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
        {/* <!-- aca van las pelis --> */}
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">juanbecharaweb.com</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">juanbecharaweb.com</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">juanbecharaweb.com</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">juanbecharaweb.com</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
      </section>
      {/* <!-- barra lateral --> */}
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form action="">
            <input type="text" />
            <button>Buscar</button>
          </form>
        </div>
        <div className="add">
          <h3 className="title">Películas</h3>
          <form>
            <input type="text" placeholder="Título" />
            <textarea name="" id="" placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar" />
          </form>
        </div>
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
