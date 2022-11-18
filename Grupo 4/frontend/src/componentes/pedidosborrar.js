import { warning } from "@remix-run/router";
import axios from "axios";
import Swal from "sweetalert2";

export default function PedidosBorrar(id)
{    

    function pedidosRefrescar()
    {
        window.location.href="/pedidoslistar";
    }

    const sw = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
            buttonsStyling: false
        })
        sw.fire({title: '¿Realmente desea eliminar este registro?',
        text: "No es posible revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: false
        }).then((result) => {
        if (result.isConfirmed) {
        
        axios.delete(`/api/pedidos/borrar/${id}`)
        .then(() => this.setState({ status: 'Borrado Exitoso' }));
        
        pedidosRefrescar()

        sw.fire(
            '¡Operación Exitosa!',
            'El registro ha sido eliminado exitosamente',
            'success'
        )


    } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        sw.fire(
            '¡ERROR!',
            'El registro no pudo ser eliminado',
            'error'
            )
        }
    })
    
}