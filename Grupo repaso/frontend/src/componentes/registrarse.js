import React from "react";

export default function Registrarse()
{
    return(
        <div className="container mt-5">
            <div className="row">
                <h2>Formulario con HTML y React</h2>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label className="form-label">Nombres</label>
                            <input type="text" className="form-control" placeholder="Nombres"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Edad</label>
                            <input type="number" className="form-control" placeholder="Edad"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Fecha</label>
                            <input type="date" className="form-control" placeholder="Fecha"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Hora</label>
                            <input type="time" className="form-control" placeholder="Hora"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Subir Archivo</label>
                            <input type="file" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Escolaridad</label>
                            <select className="form-select">
                                <option></option>
                                <option value="Primaria">Primaria</option>
                                <option value="Secundaria">Secundaria</option>
                                <option value="Técnico">Técnico</option>
                                <option value="Pregrado">Pregrado</option>
                                <option value="Posgrado">Posgrado</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="E-mail"></input>
                        </div>
                        <div className="form-group">
                            <button type="type" className="btn btn-dark">Guardar</button>
                            <input type="reset" className="btn btn-secondary" value="Borrar"></input>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}