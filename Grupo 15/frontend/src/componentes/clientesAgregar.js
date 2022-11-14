import axios from 'axios';
import uniqid from 'uniqid';
import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router';
import Swal from 'sweetalert2';

function ClientesAgregar()
{
    const[id, setId]=useState('') 
    const[id_tipodocumento, setIdTipoDocumento]=useState('')
    const[nombre, setNombre]=useState('')
    const[telefono, setTelefono]=useState('')
    const[direccion, setDireccion]=useState('')
    const[email, setEmail]=useState('')
    const navigate = useNavigate()

    function clientesInsertar()
    {
        const clientesinsertar = {
            id: uniqid(),
            id_tipodocumento : id_tipodocumento,
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            email: email
        }
        
        axios.post('api/clientes/agregar').then(res =>{
            console.log(res.data)
            Swal.fire({
                position : 'center',
                icon : 'success',
                title : 'Registro almacenado correctamente.',
                showConfirmButton: false,
                timer : 2000
            })
            navigate('/clientesListar')
        }).catch(err=>{console.log('err.stack')})
    }

    function clientesRegresar()
    {
        navigate('/clientesListar')
    }

    return(
        <div className='container mt-5'>
            <h4>Nuevo cliente</h4>
            <div className='row'>
                <div className='col-md-12'>
                    <input type="text"></input>
                </div>
            </div>
        </div>
    )
}

export default ClientesAgregar