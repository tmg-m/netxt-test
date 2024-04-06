"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { data } from "@/data.json";

const AppContext = createContext(data);

export function AppWrapper({ children }) {
  const [state, setState] = useState({
    allProducts: [],
    phones: [],
    accessories: [],
    tablets: [],
    tvs: [],
    hotToday:[],
    mixDataCard:[]
  });
  useEffect(() => {
    const allProducts = data.products;
    const phone = data.products.filter((product) => product.type === "phone");
    const accessories = data.products.filter(
      (product) => product.type === "accessories"
    );
    const tablet = data.products.filter((product) => product.type === "tablet");
    const tv = data.products.filter((product) => product.type === "tv");

    const hotToday = [...phone.slice(0, 3), ...phone.slice(5, 6)];
    const mixDataCard = [
      ...accessories,
      ...tablet.slice(3, 5),
      ...phone.slice(7, 8),
    ];

    setState({
      allProducts,
      phone,
      accessories,
      tablet,
      tv,
      hotToday,
      mixDataCard
    });
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
