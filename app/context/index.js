"use client";
import { createContext, useContext } from "react";

const AppContext = createContext();
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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
    const url = `${baseUrl}/api/products/${productType}/${productId}`;
    return await fetchProductData(url);
  };

  const getProductByType = async (productType) => {
    const url = `${baseUrl}/api/products/${productType}`;
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
