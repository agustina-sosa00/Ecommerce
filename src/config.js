export const getBaseApiUrl = () => {
  const baseApiUrl = import.meta.env.VITE_MERCADO_LIBRE_API;
  if (!baseApiUrl) {
    console.warn("VITE_MERCADO_LIBRE_API no esta definida");
    return "";
  }
  return baseApiUrl;
};
