import axios from 'axios';
import React,{useEfect, useState} from 'react';
import { useParams, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

export default function PedidosAgregar()
{
    const[id, setId] = useState('')
    const[id_cliente, setIdCliente] = useState('')
    const[fecha, setFecha] = useState('')
    const[valor, setValor] = useState('')
    const[activo, setActivo] = useState('')
    const navigate = useNavigate()

    function pedidosInsertar()
    {
        const insertar={
            id: id,
            id_cliente : id_cliente,
            fecha : fecha,
            valor : valor,
            activo : activo
        }
        
        axios.post('/api/pedidos/agregar',insertar).then(res =>{
            Swal.fire({
                position : 'center',
                icon : 'success',
                title : 'El pedido fue agregado correctamente.',
                showConfirmButton : false,
                timer : 3000
            })
            navigate('/pedidoslistar')
        }).catch(err=>{console.log(err.stack)})
    }

    function regresar()
    {
        navigate('/pedidoslistar')
    }

    return(
        <div className='container mt-5'>
            <h4>Agregar Pedido</h4>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <div className='mb-3'>
                        <label className='form-label'>ID</label>
                        <input type="text" className="form-control" id="id" placeholder="ID" onChange={(e)=>{setId(e.target.value)}} required></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Cliente</label>
                        <input type="text" className="form-control" id="id_cliente" placeholder="Id Cliente" onChange={(e)=>{setIdCliente(e.target.value)}} required></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Fecha</label>
                        <input type="date" className="form-control" id="fecha" onChange={(e)=>{setFecha(e.target.value)}} required></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Valor</label>
                        <input type="number" className="form-control" id="valor" placeholder="Valor" onChange={(e)=>{setValor(e.target.value)}} required></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Activo</label>
                        <select className="form-select" aria-label="Default select example" id="activo" onChange={(e)=>{setActivo(e.target.value)}} required>
                            <option selected></option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary' type="button" onClick={pedidosInsertar}>Agregar</button>
                        <button className='btn btn-info' type="button" onClick={regresar}>Atras</button>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}