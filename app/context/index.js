"use client";
import { createContext, useContext } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const fetchProductData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  
  const getProductById = async ({ productType, productId }) => {
    const url = `http://localhost:3000/api/products/${productType}/${productId}`;
    return await fetchProductData(url);
  };
  
  const getProductByType = async (productType) => {
    const url = `http://localhost:3000/api/products/${productType}`;
    return await fetchProductData(url);
  };

  return (
    <AppContext.Provider value={{ getProductById, getProductByType }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
