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
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <td colSpan={5}><Link to={'/pedidosagregar'}>
                                        <li className='btn btn-primary'>Agregar Pedido</li>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th>ID</th>
                                <th>ID CLIENTE</th>
                                <th>FECHA</th>
                                <th>VALOR</th>
                                <th>Controles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataPedidos.map(pedido=>(
                                    <tr className='table table-success'>
                                        <td>{pedido.id}</td>
                                        <td>{pedido.id_cliente}</td>
                                        <td>{pedido.fecha}</td>
                                        <td>{pedido.valor}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    )

}
export default PedidosListar;