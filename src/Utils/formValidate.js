export const formValidate = (input) => {
  const error = {};
  const regexEmail = /^\S+@\S+\.\S+$/;
  if (!input.email) error.email = 'Debe ingresar un email.';
  else if (!regexEmail.test(input.email))
    error.email = 'Debe ingresar un email valido.';
  else if (!input.message) error.message = 'Debe ingresar un mensaje.';
  else if (input.message.length < 20)
    error.message = 'El mensaje debe tener un mínimo de 20 caracteres.';
  return error;
};
