import { useEffect, useState, type PropsWithChildren } from "react";
import { ThemeContext, type ThemeType } from "../context/ThemeContext";

type ThemeProviderType = PropsWithChildren;

const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
