import axios from "axios";
import React,{useEffect, useState} from "react";
import Swal from 'sweetalert2';
import { useParams, useNavigate } from "react-router";

export default function PedidosAgregar()
{
    const [id, setId] = useState('')
    const [id_cliente, setIdCliente] = useState('')
    const [fecha, setFecha] = useState('')
    const [valor, setValor] = useState('')
    const [activo, setActivo] = useState('')

    //Para navegar internamente
    const navigate = useNavigate()

    //Función para insertar la información
    function pedidosInsertar()
    {
        const insertar ={
            id : id,
            id_cliente : id_cliente,
            fecha: fecha,
            valor: valor,
            activo: activo
        }
        //Establecer el método para guardar información en la BD
        axios.post('/api/pedidos/agregar',insertar).then(res=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title : 'Pedido agregado correctamente.',
                showConfirmButton : false,
                timer : 1500
            })
            navigate('/pedidoslistar');
        }).catch(err=>{console.log(err.stack)})
    }

    //Función para regresar
    function regresar()
    {
        navigate('/pedidoslistar');
    }

    return(
        <div className="container mt-5">
            <h3>Agregar Pedido</h3>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-control">ID</label>
                        <input type="text" className="form-control" id="id" onChange={(e)=>{setId(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-control">ID Cliente</label>
                        <input type="text" className="form-control" id="idcliente" onChange={(e)=>{setIdCliente(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-control">Fecha</label>
                        <input type="date" className="form-control" id="fecha" onChange={(e)=>{setFecha(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-control">Valor</label>
                        <input type="number" className="form-control" id="valor" onChange={(e)=>{setValor(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-control">Activo</label>
                        <select className="form-select" aria-label="Default select example" id="valor" onChange={(e)=>{setActivo(e.target.value)}}>
                            <option selected></option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="button" onClick={pedidosInsertar} className="btn btn-success">Guardar</button>
                        <button type="button" onClick={regresar} className="btn btn-warning">Regresar</button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}