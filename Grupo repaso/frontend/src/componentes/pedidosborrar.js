import axios from "axios";
import Swal from "sweetalert2";

export default function PedidosBorrar(id)
{
    //Función para refrescar la página
    function regresar()
    {
        window.location.href='/pedidoslistar';
    }

    const swalWithBootstrapButtons = Swal.mixin({
        customClass:{
            confirmButton : 'btn btn-success',
            cancelButton : 'btn btn-info'
        },
        buttonsStyling : false
    })

    swalWithBootstrapButtons.fire({
        title : '¿Realmente desea borrar el pedido?',
        icon : 'warning',
        showCancelButton : true,
        confirmButtonText : 'Confirmar',
        cancelButtonText : 'Cancelar',
        reverseButtons : false
    }).then((result)=>{

        if(result.isConfirmed)
        {
            axios.delete(`/api/pedidos/eliminar/${id}`).then(()=>this.setState({status : 'Borrado existoso'}));
            
            regresar()
            
            swalWithBootstrapButtons.fire(
                'Operación exitosa',
                'El pedido fue borrado del sistema.',
                'success'
            )
            
        }
        else if(result.dismiss === Swal.DismissReason.cancel)
        {
            swalWithBootstrapButtons.fire(
                'Error',
                'La eliminación del pedido fue cancelada',
                'error'
            )
        }
    })

}