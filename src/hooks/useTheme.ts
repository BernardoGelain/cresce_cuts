import { ThemeContext } from "@/contexts/themeContext";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
