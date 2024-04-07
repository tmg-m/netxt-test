"use client";
import { createContext, useContext } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const getProductById = async ({ productType, productId }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${productType}/${productId}`
      );
      if (response.ok) {
        const [data] = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <AppContext.Provider value={{ getProductById }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
