import { createContext, useContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();
export const CategpryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem('selectedCategory') || '';
  });

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategory = () => useContext(CategoryContext);
