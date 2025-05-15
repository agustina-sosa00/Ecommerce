import Swal from 'sweetalert2';

export const modalAlert = ({
  icon,
  text,
  textButton,
  cancelButton,
  cancelText,
}) => {
  if (cancelButton) {
    return Swal.fire({
      title: text,
      icon: icon,
      confirmButtonText: textButton,
      cancelButtonText: cancelText,
      showCancelButton: cancelButton,
      confirmButtonColor: '#38b000',
      cancelButtonColor: '#d62828',
      customClass: {
        modal: 'modalAlert',
      },
    });
  } else {
    return Swal.fire({
      title: text,
      icon: icon,
      confirmButtonText: textButton,
    });
  }
};
