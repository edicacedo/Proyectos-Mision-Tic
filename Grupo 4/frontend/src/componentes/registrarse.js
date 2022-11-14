import React from "react";

function Registrarse()
{
    return(
        <div className="container mt-5">
            <h3>Formulario de registro</h3>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <label>Nombres</label>
                            <input className="form-control" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email"></input>
                        </div>
                        <div className="form-group">
                            <label>Edad</label>
                            <input className="form-control" type="number"></input>
                        </div>
                        <div className="form-group">
                            <label>Fecha de Nacimiento</label>
                            <input className="form-control" type="date"></input>
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input className="btn btn-primary" type="submit" value="Guardar"></input>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    )
}

export default Registrarse