import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function PedidosEditar()
{
    const parametros = useParams()
    const [id_cliente, setIdCliente]=useState('')
    const [fecha, setFecha]=useState('')
    const [valor, setValor]=useState('')
    const [activo, setActivo]=useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`/api/pedidos/cargar/${parametros.id}`).then(res =>{
            const dataPedidos = res.data[0]
            setIdCliente(dataPedidos.id_cliente)
            setFecha(dataPedidos.fecha)
            setValor(dataPedidos.valor)
            setActivo(dataPedidos.activo)
        })
    },[])

    function pedidosActualizar()
    {
        const actualizar ={
            id : parametros.id,
            id_cliente : id_cliente,
            fecha : fecha,
            valor: valor,
            activo : activo
        }
        axios.post(`/api/pedidos/editar/${parametros.id}`,actualizar).then(res =>{
            Swal.fire({
                position : 'center',
                icon : 'success',
                title : 'La información se actualizo correctamente',
                showConfirmButton : false,
                timer : 2000
            })
            navigate ('/pedidoslistar');
        }).catch(err =>{console.log(err.stack)})
    }

}