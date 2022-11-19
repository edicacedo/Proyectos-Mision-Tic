import './App.css';

import PaginaPrincipal from './componentes/paginaprincipal';

import PedidosListar from './componentes/pedidoslistar';
//Agregar 
import PedidosAgregar from './componentes/pedidosagregar';

import Informacion from './componentes/informacion';

import Registrarse from './componentes/registrarse';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Proyecto</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="/pedidoslistar">Pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/informacion">Informacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registrarse">Informacion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPrincipal/>} exact></Route>
        <Route path='/pedidoslistar' element={<PedidosListar/>} exact></Route>
        <Route path='/pedidosagregar' element={<PedidosAgregar/>} exact></Route>
        <Route path='/informacion' element={<Informacion/>} exact></Route>
        <Route path='/registrarse' element={<Registrarse/>} exact></Route>
      </Routes>    
    </BrowserRouter>
    <section className="mt-5 mb-5">
      <div align="center">
          Copyright (c) 2022 - MisionTIC - UCaldas
      </div> 
    </section>
    </div>
  );
}

export default App;
