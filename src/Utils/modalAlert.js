import Swal from 'sweetalert2';

export const modalAlert = ({ icon, text, textButton }) => {
  Swal.fire({
    title: text,
    icon: icon,
    confirmButtonText: textButton,
  });
};
