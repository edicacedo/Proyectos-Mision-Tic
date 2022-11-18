import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

export default function PedidosAgregar()
{
    const [id, setId] = useState('')
    const [id_cliente, setIdCliente] = useState('')
    const [fecha, setFecha] = useState('')
    const [valor, setValor] = useState('')
    const [activo, setActivo] = useState('')
    const navigate = useNavigate()
    //Función para insertar
    function pedidosInsertar()
    {
        const insertar={
            id: id,
            id_cliente : id_cliente,
            fecha : fecha,
            valor : valor,
            activo : activo
        }
        //Establecer el método para guardar la información en la BD
        axios.post('/api/pedidos/agregar',insertar).then(res=>{
            Swal.fire({
                position: 'center',
                icon : 'success',
                title : 'Registro almacenado correctamente.',
                showConfirmButton : false,
                timer: 2000
            })
            navigate('/pedidoslistar')
        }).catch(err=>{console.log(err.stack)})
    }
    //Función regresar
    function regresar()
    {
        navigate('/pedidoslistar');
    }
    //returnar el formulario
    return(
        <div className='container mt-5'>
            <h3>Agregar Pedido</h3>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label className='form-label'>ID</label>
                        <input type="text" className='form-control' id="id" value={id} onChange={(e)=>{setId(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Cliente</label>
                        <input type="text" className='form-control' id="idcliente" value={id_cliente} onChange={(e)=>{setIdCliente(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Fecha</label>
                        <input type="date" className='form-control' id="fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Valor</label>
                        <input type="number" className='form-control' id="valor" value={valor} onChange={(e)=>{setValor(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Activo</label>
                        <select class="form-select" aria-label="Default select example" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}>
                            <option selected></option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <button type='button' onClick={regresar} className="btn btn-warning">Regresar</button>
                        <button type='button' onClick={pedidosInsertar} className="btn btn-primary">Agregar</button>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}