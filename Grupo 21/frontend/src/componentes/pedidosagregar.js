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
}