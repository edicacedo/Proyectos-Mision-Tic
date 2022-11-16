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
            
        </div>
    )
}