"use client"
import { createContext, useState, useContext } from "react";
import { data } from "@/data.json"

const AppContext = createContext(data);

export function AppWrapper({ children }) {
  let [state, setState] = useState({data});
  
  return (<AppContext.Provider value={state}>{children}</AppContext.Provider>);
}

export function useAppContext() {
    return useContext(AppContext)
}