import { createContext } from "react";

export type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);
