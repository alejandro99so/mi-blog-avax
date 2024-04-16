"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";

// Definir el tipo para el valor del contexto.
interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

// Crear el contexto con un valor predeterminado. Es importante proporcionar un objeto que coincida con el tipo `ThemeContextType`.
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // Valor predeterminado
  toggle: () => { }, // Función de operación predeterminada
});

// Definir el tipo para las props del componente ThemeContextProvider.
interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Retornar un valor predeterminado si `window` no está definido.
};
