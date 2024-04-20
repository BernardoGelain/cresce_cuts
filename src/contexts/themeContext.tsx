import { GlobalStyle } from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { defaultTheme } from "@/styles/themes/default";
import { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
  children: ReactNode;
};
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState("default");

  function toggleTheme() {
    theme === "dark" ? setTheme("default") : setTheme("dark");
  }

  return (
    <ThemeProvider theme={theme == "default" ? defaultTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
