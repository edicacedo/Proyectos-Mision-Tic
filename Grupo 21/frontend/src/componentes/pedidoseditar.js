import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

function PedidosEditar()
{
    const parametros = useParams()
    const[id_cliente, setIdCliente] = useState('')
    const[fecha, setFecha] = useState('')
    const[valor, setValor] = useState('')
    const[activo, setActivo] = useState('') 
    const navigate = useNavigate()
    
    useEffect(()=>{

        axios.get(`/api/pedidos/cargar/${parametros.id}`).then(res => {

        console.log(res.data[0])
        const dataPedidos = res.data[0]
        setIdCliente(dataPedidos.id_cliente)
        setFecha(dataPedidos.fecha)
        setValor(dataPedidos.valor)
        setActivo(dataPedidos.activo)
        })
    }, [])

    function pedidosActualizar()
    {
        const pedidoactualizar = {
            id: parametros.id,
            id_cliente: id_cliente,
            fecha: fecha,
            valor: valor,
            activo: activo
        }

        console.log(pedidoactualizar)

        axios.post(`/api/pedidos/editar/${parametros.id}`,pedidoactualizar).then(res => {
            Swal.fire({ position: 'center', icon: 'success',  title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/pedidoslistar')
            }).catch(err => {console.log(err.stack)})
    }

    function pedidosRegresar()
    {
        navigate('/pedidoslistar')
    }

    return(
        <div className="container mt-5">
            <h4>Pedido</h4>
            <div className="row">
                <div className="col-md-12">
                <div className="mb-3">
                        <label htmlFor="id_cliente" className="form-label">Id Cliente</label>
                        <input type="text" className="form-control" id="id_cliente" value={id_cliente} onChange={(e) => {setIdCliente(e.target.value)}}></input>
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha</label>
                        <input type="text" className="form-control" id="fecha" value={fecha} onChange={(e) => {setFecha(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Valor</label>
                        <input type="text" className="form-control" id="valor" value={valor} onChange={(e) => {setValor(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="activo" className="form-label">Activo</label>
                        <input type="text" className="form-control" id="activo" value={activo} onChange={(e) => {setActivo(e.target.value)}}></input>
                    </div>                
                    <div className="mb-12">
                        <button type="button" onClick={pedidosRegresar} className="btn btn-primary">Atras</button>
                        <button type="button" onClick={pedidosActualizar} className="btn btn-success">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default PedidosEditar;