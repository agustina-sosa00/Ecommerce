// esta funcion obtiene la variable de entorno, para no importarla en cada caso. En cambio, se obtiene aca, y solo se debe ejecutar la funcion.
// ademas esta funcion maneja un mensaje de error en la consola en caso de que la variable de entorno no este definida.
// con console.warn se muestra el error en la consola, pero no se detiene la ejecucion del codigo y la app sigue funcionando
export const getBaseApiUrl = () => {
  const baseApiUrl = import.meta.env.VITE_MERCADO_LIBRE_API;
  if (!baseApiUrl) {
    console.warn('VITE_MERCADO_LIBRE_API no esta definida');
    return '';
  }
  return baseApiUrl;
};
