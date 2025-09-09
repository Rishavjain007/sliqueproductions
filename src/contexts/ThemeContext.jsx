import React, { createContext, useContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

const themeColors = {
  light: {
    bg: "#fff",
    text: "#000",
    accent: "#B18652",
    cardBg: "#fff",
    cardBorder: "#B18652",
    sectionGradient: "linear-gradient(90deg, #fff 60%, #B186527c 100%)",
    Title: "#B18652",
    heroOverlay: "rgba(82, 77, 35, 0.2)",
    faqCard: "#fff",
    shadow: "0 8px 32px 0 #B186527c",
  },
  dark: {
    bg: "#000",
    text: "#fff",
    accent: "#B18652",
    cardBg: "#111",
    cardBorder: "#B18652",
    sectionGradient: "linear-gradient(90deg, #000 60%, #B186527c 100%)",
    Title: "#fff",
    heroOverlay: "rgba(82, 77, 35, 0.45)",
    faqCard: "#181818",
    shadow: "0 8px 32px 0 #B186527c",
  },
};

export const ThemeProvider = ({ children }) => {
  // Use user's system preference for initial value:
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
  );

  const theme = useMemo(
    () => (darkMode ? themeColors.dark : themeColors.light),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ theme, darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
