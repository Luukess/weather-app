import { createContext } from "react";

export type contextTypeTheme = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<contextTypeTheme | null>(null);
