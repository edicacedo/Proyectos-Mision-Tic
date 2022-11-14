import React from "react";
import Imagen from '../assest/imagen.jpg'

export default function Inicio()
{
    return(
        <div className="container mt-5">
            <h2>Página Principal</h2>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <img src={Imagen} alt="Imagen"></img>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}