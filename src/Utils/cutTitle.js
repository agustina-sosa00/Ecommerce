export const cutTitle = (title, indice) => {
  return title.length > indice ? title.slice(0, indice) + '...' : title;
};
