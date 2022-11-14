import axios from 'axios';
import uniqid from 'uniqid';
import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router';

function ClientesAgregar()
{
    const[id, setId] = useState('')
    const[id_tipodoc, setIdTipodoc] = useState('')
    const[nombre, setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate()

    function clientesInsertar()
    {
        const clientesinsertar = {
            id: uniqid(),
            id_tipodocumento : id_tipodoc,
            nombre : nombre,
            telefono: telefono,
            email: email
        }

        axios.post('api/clientes/agregar').then(res =>{
            console.log(res.data)
            Swal.fire({
                position: 'center',
                icon : success,
                title: 'Cliente almacenado correctamente.',
                showConfirmButton : false,
                timer: 2000
            })
        })
    }
}

export default ClientesAgregar