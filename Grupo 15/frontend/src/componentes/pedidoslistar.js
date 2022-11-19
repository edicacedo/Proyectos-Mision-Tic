import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//import PedidosBorrar from './pedidosborrar';

//Metodo que contiene las tareas para listar pedidos
function PedidosListar()
{

    const[dataPedidos, setdataPedidos] = useState([])

    useEffect(()=>{
        axios.get('api/pedidos/listar').then(res => {
        console.log(res.data)
        setdataPedidos(res.data)
        }).catch(err=>{console.log(err.stack)})
    },[])
    
    return (
        <div className="container mt-5">
        <h4>Lista de Pedidos</h4>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr key={0}>
                            <td colSpan={7}><Link to={'/pedidosagregar'}>
                                <li className="btn btn-primary">Agregar Pedido</li>
                                </Link></td>
                        </tr>
                        <tr key={0}>
                            <td align="center">Id</td>
                            <td>Id Cliente</td>
                            <td>Fecha</td>
                            <td>Valor</td>
                            <td align="center">Estado</td>
                            <td align="center" colSpan={2}>Controles</td>
                        </tr>
                    </thead> 
                    <tbody className='dialog'>
                    {
                        dataPedidos.map(mipedido => (
                        <tr key={mipedido.id}>
                            <td align="center">{mipedido.id}</td>
                            <td>{mipedido.id_cliente}</td>
                            <td>{mipedido.fecha}</td>
                            <td align="right">{mipedido.valor}</td>
                            <td align="center">{mipedido.activo ? 'Activo' : 'Inactivo'}</td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )

}
export default PedidosListar;