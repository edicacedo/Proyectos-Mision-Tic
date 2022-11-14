import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './componentes/inicio';
import Informacion from './componentes/informacion';
import Usuarios from './componentes/usuarios';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Proyecto</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/informacion">Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/usuarios">Usuarios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/informacion' element={<Informacion />} exact></Route>
          <Route path='/usuarios' element={<Usuarios />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
