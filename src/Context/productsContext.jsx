import { createContext, useContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [productsContext, setProductsContext] = useState(() => {
    const stored = localStorage.getItem('productsContext');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const products = JSON.stringify(productsContext);
    localStorage.setItem('productsContext', products);
  }, [productsContext]);

  return (
    <ProductsContext.Provider value={{ productsContext, setProductsContext }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => useContext(ProductsContext);
