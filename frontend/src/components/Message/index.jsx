import Swal from 'sweetalert2';

const Message = {
    success: (txt) => {
        Swal.fire({
            icon: "success",
            title: "Sucesso",
            text: txt,
        });
    },
    error: (txt) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: txt,
        });
    }
}

export default Message;
